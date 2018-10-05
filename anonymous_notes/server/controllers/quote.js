var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');


module.exports = {
    show: function(req, res){
        Quote.find({}, function(err, quotes){
           if(err) {
            console.log('it doesnt work');
            console.log(quotes.errors);
          }
          else {
            console.log("it works")
            console.log(quotes);
            res.json( quotes);
            
          }
        })
    },

    create: function(req,res){
      console.log('adding new quote to db');
      console.log(req.body);
        var quote = new Quote({text: req.body.text});
        quote.save(function(err) {
          if(err) {
            console.log('something went wrong');
            let errors = [];
            for (var key in err.errors){
              errors.push(err.errors[key].message)
            }
            res.json({message: "Error", error:errors})
          } 
          else {
            console.log('successfully added a Quote!');
            res.json({message: "Success", quote:quote});
          }
        })
    }
}