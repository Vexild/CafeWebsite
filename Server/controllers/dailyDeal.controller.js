import DailyDeal from '../models/dailyDeal.model.js'

export default {
        get: async (req, res) => {
        const content = await DailyDeal.find({})
        res.send(content)
    },
    put: async (req, res) => {
       DailyDeal.updateOne(
           {},
          {content: req.body.content }
       )
       .catch(error => res.send(error))
       res.send("Updated")
    }
}