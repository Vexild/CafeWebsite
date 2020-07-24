import Catering from '../models/catering.model.js' 

export default {
        getReservations: async (req, res) => {
        const dates = await Catering.find({})
        console.log(dates, typeof(dates))
        res.send(dates)
    },
}