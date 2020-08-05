import mongoose from 'mongoose'

const AboutUsSchema = new mongoose.Schema({
    content: String
})

const AboutUs = mongoose.model("aboutUs", AboutUsSchema, "aboutUs")

export default AboutUs