import express from 'express'
import productsController from '../controllers/products.controller.js'
import multer from 'multer'

const route = express.Router()
const upload = multer()

route.get('/api/products/get', productsController.get)
route.get('/api/products/update/:id', productsController.editproduct)
route.post('/api/products/edit', upload.fields([]), productsController.edit)

export default route