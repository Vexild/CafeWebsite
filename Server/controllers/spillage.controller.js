import mongoose from 'mongoose'
import Spillage from '../models/spillage.model.js'

export default {
    get: async (req, res) => {
        const data = await Spillage.find({})
        if (data) {
        res.send(data)
        }
        else {
            res.send("")
        }

    },
    post: async (req, res) => {
        const spillage = new Spillage()
        spillage.date = req.body.date
        spillage.save()
        .then(res.send("Success"))
    },
    delete: async (req, res) => {
       Spillage.deleteOne({_id: req.body._id})
       .then(res.send("Deleted"))
       .catch(e => res.send(e))

    }
}
