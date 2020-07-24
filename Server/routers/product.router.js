import express from 'express'
import productsController from '../controllers/products.controller.js'

const route = express.Router()

route.get('/api/products/get', productsController.get)
route.get('/api/products/update/:id', productsController.editProduct)
route.post('/api/products/edit', productsController.edit)
route.post('/api/products/post', productsController.newProduct)

export default route