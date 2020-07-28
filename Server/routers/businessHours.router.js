import express from 'express'
import businessHoursController from '../controllers/businessHours.controller.js'

const route = express.Router()

route.get('/api/businesshours/get', businessHoursController.get)
route.put('/api/businesshours/put', businessHoursController.put)
export default route