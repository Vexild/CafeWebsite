import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    id: Number,
    tags: Array,
    description: String,
    productInfo: String
})

const Product = mongoose.model("Products", ProductSchema)

export default Product