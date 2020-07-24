import BusinessHours from '../models/businessHours.model.js' 

export default {
        get: async (req, res) => {
            console.log("tissi")
        const content = await BusinessHours.find({})
        res.send(content)
    },
}