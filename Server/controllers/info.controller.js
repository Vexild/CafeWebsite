import Info from '../models/info.model.js'

export default {
        editinfo: async (req, res) => {
        const info = await Info.findOne({})

        await info.updateOne(
            {$set: {
               address: req.body.address,
               city: req.body.city,
               phone: req.body.phone,
               email: req.body.email 
            }})
            await info.save()
            .then(res.send("Updated"))
            .catch(e => res.send(e))
    },
    get: async (req, res) => {
    const data = await Info.find({})
    res.send(data)
    }
}