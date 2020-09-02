import express from 'express'
import productsController from '../controllers/products.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.get('/api/products/get', productsController.get)
route.post('/api/products/post', auth, productsController.post)
route.delete('/api/products/delete', auth, productsController.delete)
route.put('/api/products/put', auth, productsController.put)

export default route