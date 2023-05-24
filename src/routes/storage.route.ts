/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { uploadMiddleware } from '../utils/handlerStorage'
import { getStorageItems, postStorage } from '../controllers/storage.controller'

const router = express.Router()

router.get('/', getStorageItems)
router.post('/', uploadMiddleware.single('myFile'), postStorage)

export { router }
