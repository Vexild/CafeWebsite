import mongoose from 'mongoose'

const InfoSchema = new mongoose.Schema({
    address: String,
    city: String,
    phone: String,
    email: String
})

const Info = mongoose.model("Info", InfoSchema)

export default Info