
export default {
        getReservations: async (req, res) => {
        const dates = await cafeDB.catering.find({})
        res.send(dates)
    },
}