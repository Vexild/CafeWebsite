import express from 'express'
import cateringController from '../controllers/catering.controller.js'

const route = express.Router()

route.get('/api/catering/get', cateringController.getReservations)

export default route