import express from 'express'
import infoController from '../controllers/info.controller.js'

const route = express.Router()

route.get('/info/get', infoController.get)

export default route