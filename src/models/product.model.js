import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    tags: Array
})

const Product = mongoose.model("Products", ProductSchema)

export default Product