var quotes = require('../controllers/quote.js');

module.exports = function(app){
    console.log('in routes');
    app.get('/quotes', (req, res, next) =>{
        console.log('fetching quotes');
        quotes.show(req, res);
    });
    app.post('/new', (req, res, next) =>{
        console.log('adding quote');
        quotes.create(req, res);
    })
} 