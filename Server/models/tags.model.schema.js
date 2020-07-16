import mongoose from 'mongoose'

const TagSchema = new mongoose.Schema({
    name: String,
    isProductType: Boolean
})

const Tag = mongoose.model("Tags", TagSchema)

export default Tag