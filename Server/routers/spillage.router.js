import express from 'express'
import SpillageController from '../controllers/spillage.controller.js'

const route = express.Router()

route.get('/api/spillage/get', SpillageController.get)
route.post('/api/spillage/post', SpillageController.post)
route.delete('/api/spillage/delete', SpillageController.delete)

export default route