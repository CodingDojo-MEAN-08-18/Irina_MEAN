var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 3},
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote');