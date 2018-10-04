const mongoose = require('mongoose');
const apiController = require('./../controllers/restful.js')

module.exports = function(app){
	app.get('/tasks', apiController.index),
	app.post('/new', apiController.add),
	app.delete('/remove/:id', apiController.remove),
	app.get('/task/:id', apiController.show),
	app.put('/update/:id', apiController.update)
};
