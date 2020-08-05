import AboutUs from '../models/aboutUs.model.js'

export default {
        get: async (req, res) => {
        const content = await AboutUs.find({})
        res.send(content)
    },
    put: async (req, res) => {
       AboutUs.updateOne(
           {},
          {content: req.body.content }
       )
       .catch(error => res.send(error))
       res.send("Updated")
    }
}