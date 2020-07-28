import mongoose from 'mongoose'

const InfoSchema = new mongoose.Schema({
    address: String,
    city: String,
    phone: String,
    email: String
})

//Mongo changes the collection name to plural by default
//Optional 3rd argument to specify that the collection name (in this case) is singular "info"
const Info = mongoose.model("info", InfoSchema, "info")

export default Info