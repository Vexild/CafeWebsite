import express from 'express'
import mailController from '../controllers/mail.controller.js'

const route = express.Router()

route.post('/api/mail/post', mailController.post)

export default route