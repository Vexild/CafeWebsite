import mongoose from 'mongoose'

const AboutUsSchema = new mongoose.Schema({
    content: String,
    content2: String,
    content3: String
})

const AboutUs = mongoose.model("aboutUs", AboutUsSchema, "aboutUs")

export default AboutUs