const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "Name is required"],
		min: [3, "Name must be at least 3 characters"],
	},
	cousine: {
		type: String,
		trim: true,
		required: [true, "Cousine is required"],
		min: [3, "Name must be at least 3 characters"],
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);