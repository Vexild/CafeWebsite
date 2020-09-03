import express from 'express'
import aboutUsController from '../controllers/aboutUs.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.get('/api/aboutus/get', aboutUsController.get)
route.put('/api/aboutus/put', auth, aboutUsController.put)
export default route