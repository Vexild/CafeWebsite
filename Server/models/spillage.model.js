import mongoose from 'mongoose'

const SpillageSchema = new mongoose.Schema({
    date: String,
})

const Spillage = mongoose.model("spillage", SpillageSchema, "spillage")

export default Spillage