import DailyDeals from '../models/dailyDeals.model.js'

export default {
        get: async (req, res) => {
        const content = await DailyDeals.find({})
        res.send(content)
    },
    put: async (req, res) => {
       DailyDeals.updateOne(
           {},
          {content: req.body.content }
       )
       .catch(error => res.send(error))
       res.send("Updated")
    }
}