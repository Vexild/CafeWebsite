import express from 'express'
import tagsController from '../controllers/tags.controller.js'
import auth from '../auth.js'

const route = express.Router()

route.get('/api/tags/get', tagsController.get)
route.post('/api/tags/post', auth, tagsController.post)
route.put('/api/tags/put', auth, tagsController.put)
route.delete('/api/tags/delete', auth, tagsController.delete)

export default route