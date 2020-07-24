import BusinessHours from '../models/businessHours.model.js' 

export default {
        get: async (req, res) => {
        const content = await BusinessHours.find({})
        res.send(content)
    },
    put: async (req, res) => {
        console.log(req.body.content)
       BusinessHours.updateOne(
           {},
          {content: req.body.content }
       )
       .catch(error => res.send(error))
       res.send("test")
    }
}