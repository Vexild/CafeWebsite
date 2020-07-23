import mongoose from 'mongoose'

const ContactInfoSchema = new mongoose.Schema({
    address: String,
    city: String,
    phone: String,
    email: String
})

const ContactInfo = mongoose.model("Info", ContactInfoSchema)

export default ContactInfo