import mongoose from 'mongoose'

const CateringSchema = new mongoose.Schema({
    date: String
})

//Mongo changes the collection name to plural by default
//Optional 3rd argument to specify collection name
const Catering = mongoose.model("catering", CateringSchema, "catering")

export default Catering