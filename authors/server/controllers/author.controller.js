const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
	index(request, response) {
		Author.find({})
			.then(authors => response.json(authors))
			.catch(console.log)
	},
	create(request, response) {
		Author.create(request.body)
			.then(author => response.json(author))
			.catch(error => {
				const errors = Object.keys(error.errors).map(
					key => error.errors[key].message);

				response.status(500).json(errors);
			});
	},
	show(request, response) {
		Author.findById(request.params.author_id)
			.then(author => response.json(author))
			.catch(console.log);
	},
	update(request, response) {
		Author.findByIdAndUpdate(
			request.params.author_id, 
			{ $set: request.body }, 
			{new: true}
		)
			.then(author => response.json(author))
			.catch(error => {
				const errors = Object.keys(error.errors).map(
					key => error.errors[key].message);

				response.status(500).json(errors);
			});
	},
	destroy(request, response) {
		console.log("destroy", request.params.author_id);
		Author.findByIdAndRemove(request.params.author_id)
			.then(author => response.json(author))
			.catch(console.log);
	},
};