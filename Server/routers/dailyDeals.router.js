import express from 'express'
import dailyDealsController from '../controllers/dailyDeals.controller.js'
import auth from './auth.js'

const route = express.Router()

route.get('/api/dailydeals/get', dailyDealsController.get)
route.use(auth)
route.put('/api/dailydeals/put', dailyDealsController.put)
export default route