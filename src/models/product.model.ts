import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	goodName: {
		type: String,
		required: true,
	},
	offer: {
		type: Number || Boolean,
		required: true,
	},
	actual: {
		type: Boolean,
		required: true,
	},
	shopName: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		require: true,
	},
	prices: {
		type : Array,
		requre: true
	},
})

export const ProductModel = mongoose.models.products2 ||  mongoose.model("products2", ProductSchema)