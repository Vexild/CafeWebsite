import Catering from '../models/catering.model.js' 

export default {
        getReservations: async (req, res) => {
        const dates = await Catering.find({})
        console.log(dates, typeof(dates))
        res.send(dates)
    },
    post: async (req, res) => {
        const catering = new Catering()
        catering.date = req.body.date
        catering.save()
        res.send("TODO")

    },
    delete: async (req, res) => {
       Catering.deleteOne({_id: req.body._id})
       .then(res.send("TODO"))
    }
}
//mon jul 27 yyyy