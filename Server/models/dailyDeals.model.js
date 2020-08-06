import mongoose from 'mongoose'

const DailyDealsSchema = new mongoose.Schema({
    content: String
})

const DailyDeals = mongoose.model("dailyDeals", DailyDealsSchema, "dailyDeals")

export default DailyDeals