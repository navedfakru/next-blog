import mongoose from "mongoose";

const productModel = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}
})

export const Product = mongoose.models.products || mongoose.model("products", productModel);