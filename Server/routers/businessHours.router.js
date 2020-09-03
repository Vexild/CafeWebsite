import express from 'express'
import businessHoursController from '../controllers/businessHours.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.get('/api/businesshours/get', businessHoursController.get)
route.put('/api/businesshours/put', auth, businessHoursController.put)
export default route