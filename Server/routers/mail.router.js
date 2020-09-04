import express from 'express'
import mailController from '../controllers/mail.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.post('/api/mail/post', mailController.post)
// route.post('/api/mail/post', auth, mailController.post)

export default route