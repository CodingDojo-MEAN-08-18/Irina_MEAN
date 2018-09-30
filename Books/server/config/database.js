const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelPath = path.resolve('server/models');
//const modelsPath = path.join(__dirname, '../models');

mongoose.connect(
	 'mongodb://localhost:27017/books',
	 {
	 	useNewUrlParser: true,
	 }

);


mongoose.connection.on('connected', () => console.log('connected to mongodb'));

//mongoose <5
//mongoose.promise = global.Promise

fs.readdirSync(modelsPath).forEach(file =>{

	if(file.index0f('.js') > 0) {
		require(path.join(modelsPath, file));
	}
})