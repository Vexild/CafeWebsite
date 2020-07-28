import mongoose from 'mongoose'
import Tag from '../models/tags.model.schema.js'

export default {
   get: async (req, res)  => {
       const tags = await Tag.find({})
       .catch(e => res.send(e))
       res.send(tags)

   },
   post: async (req, res) => {
       const tag = new Tag()
       tag.name = req.body.name,
       tag.isProductType = req.body.isProductType,
       tag.isPriority = req.body.isPriority
       tag.save()
       res.send("TODO")
   },
   put: async (req, res) => {
       Tag.findOneAndUpdate({_id : req.body.id},
        {$set: {
           name: req.body.name,
           isProductType: req.body.isProductType,
           isPriority: req.body.isPriority
       }})
       .catch(e => console.log(e))
       res.send("KURWO")
   }, 
   delete: async (req, res) => {
       await Tag.deleteOne({_id : req.body._id})
       res.send("TODO")
   }
}
