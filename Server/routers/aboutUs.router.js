import express from 'express'
import aboutUsController from '../controllers/aboutUs.controller.js'

const route = express.Router()

route.get('/api/aboutus/get', aboutUsController.get)
route.put('/api/aboutus/put', aboutUsController.put)
export default route