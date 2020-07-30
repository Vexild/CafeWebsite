import Catering from '../models/catering.model.js' 

export default {
        getReservations: async (req, res) => {
        const dates = await Catering.find({})
        res.send(dates)
    },
    post: async (req, res) => {
        const catering = new Catering()
        catering.date = req.body.date
        catering.save()
        .then(res.send("Added"))
        .catch(e => res.send(e))

    },
    delete: async (req, res) => {
       Catering.deleteOne({_id: req.body._id})
       .then(res.send("Deleted"))
       .catch(e => res.send(e))
    }
}