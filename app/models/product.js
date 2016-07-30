var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	imgUrl: {
		type: String,
		required: true
	},
});


module.exports = mongoose.model('product', productSchema);