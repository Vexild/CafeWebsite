import mongoose from 'mongoose'

const BusinessHoursSchema = new mongoose.Schema({
    content: String
})

//Mongo changes the collection name to plural by default
//Optional 3rd argument to specify collection name
const BusinessHours = mongoose.model("businessHours", BusinessHoursSchema, "businessHours")

export default BusinessHours