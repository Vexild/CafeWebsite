import express from 'express'
import infoController from '../controllers/info.controller.js'

const route = express.Router()

route.get('/api/info/get', infoController.get)
route.post('/api/info/edit', infoController.editinfo)

export default route