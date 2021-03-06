const mongoose = require('mongoose');
const Task = mongoose.model('Task') 

module.exports = {

    index: function(req, res) {
    	Task.find({}, function(err, tasks){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: tasks})
        }
     })
    },
    add: function(req, res) {
     console.log("POST DATA", req.body);
	 //creates new user instance

	 var task = new Task({title: req.body.title, description: req.body.description});
	 task.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success: ", data});
            }
        });
    },
   remove: function(req, res) {
   		//req.params searches the url for the object after
        Task.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Removed Successfully: ", data});
            }
        });
    },
    show: function(req, res) {
    	 Task.findOne({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Showing task...", data});
            }
        })
    },
    update: function(req, res) {
        Task.update({ _id: req.params.id }, {title: req.body.title, description: req.body.description}, function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Updating task...", data});
            }
        })
    }
};
