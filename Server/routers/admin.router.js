import express from 'express'
import adminController from '../controllers/admin.controller.js'

const route = express.Router()

route.put('/api/restrictedzone/changepwd', adminController.changePwd)
route.post('/api/restrictedzone/login', adminController.logIn)
route.get('/api/restrictedzone/test', adminController.testToken)

export default route