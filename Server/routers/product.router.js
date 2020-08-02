import express from 'express'
import productsController from '../controllers/products.controller.js'

const route = express.Router()

route.get('/api/products/get', productsController.get)
route.post('/api/products/post', productsController.post)
route.delete('/api/products/delete', productsController.delete)
route.put('/api/products/put', productsController.put)

export default route