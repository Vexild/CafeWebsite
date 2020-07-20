import express from 'express'
import productsController from '../controllers/products.controller.js'
import multer from 'multer'
import bodyParser from 'body-parser'
/*
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
*/

const route = express.Router()
const upload = multer()

route.get('/api/products/get', productsController.get)
route.get('/api/products/update/:id', productsController.editproduct)
route.post('/api/products/edit', upload.fields([]), productsController.edit)

export default route