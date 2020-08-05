import mongoose from 'mongoose'

const DailyDealSchema = new mongoose.Schema({
    content: String
})

const DailyDeal = mongoose.model("dailyDeal", DailyDealSchema, "dailyDeal")

export default DailyDeal