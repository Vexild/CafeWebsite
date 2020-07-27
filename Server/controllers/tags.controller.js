import mongoose from 'mongoose'
import Tag from '../models/tags.model.schema.js'

export default {
   get: async (req, res)  => {
       const tags = await Tag.find({})
       .catch(e => res.send(e))
       res.send(tags)

   },
   post: async (req, res) => {

   },
   put: async (req, res) => {

   }, 
   delete: async (req, res) => {

   }
}
