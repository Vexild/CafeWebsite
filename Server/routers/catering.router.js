import express from 'express'
import cateringController from '../controllers/catering.controller.js'

const route = express.Router()

route.get('/api/catering/get', cateringController.getReservations)
route.post('/api/catering/post', cateringController.post)
route.delete('/api/catering/delete', cateringController.delete)

export default route