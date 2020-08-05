import express from 'express'
    import dailyDealController from '../controllers/dailyDeal.controller.js'

const route = express.Router()

route.get('/api/dailydeal/get', dailyDealController.get)
route.put('/api/dailydeal/put', dailyDealController.put)
export default route