import express from 'express'
import tagsController from '../controllers/tags.controller.js'

const route = express.Router()

route.get('/api/tags/get', tagsController.get)
route.post('/api/tags/post', tagsController.post)
route.put('/api/tags/put', tagsController.put)
route.delete('/api/tags/delete', tagsController.delete)

export default route