import express from 'express'
import infoController from '../controllers/info.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.get('/api/info/get', infoController.get)
route.post('/api/info/edit', auth, infoController.editinfo)

export default route