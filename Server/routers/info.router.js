import express from 'express'
import multer from 'multer'

const upload = multer()

import infoController from '../controllers/info.controller.js'

const route = express.Router()

route.get('/api/info/get', infoController.get)
route.get('/api/info/put/contact_information', infoController.newinfo)
route.post('/api/info/edit', upload.fields([]), infoController.editinfo)

export default route