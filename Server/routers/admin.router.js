import express from 'express'
import adminController from '../controllers/admin.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.post('/api/restrictedzone/login', adminController.logIn)
route.put('/api/restrictedzone/changepwd', auth, adminController.changePwd)
route.get('/api/restrictedzone/test', auth, adminController.testToken)

export default route
