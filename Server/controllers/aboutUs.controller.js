import AboutUs from '../models/aboutUs.model.js'

export default {
        get: async (req, res) => {
        const content = await AboutUs.find({})
        res.send(content)
    },
    put: async (req, res) => {
       AboutUs.updateOne(
           {},
          {content: req.body.content, 
          content2: req.body.content2,
          content3: req.body.content3}
       )
       .catch(error => res.send(error))
       res.send("Updated")
    }
}