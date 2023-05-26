/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { uploadMiddleware } from '../utils/handlerStorage'
import {
  deleteStorageItem,
  getStorageItem,
  getStorageItems,
  postStorage
} from '../controllers/storage.controller'
import { validatorIdStorage } from '../validators/storage.validator'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', authMiddleware, getStorageItems)

router.get('/:id', authMiddleware, validatorIdStorage, getStorageItem)

router.post('/', authMiddleware, uploadMiddleware.single('myFile'), postStorage)

router.delete('/:id', authMiddleware, validatorIdStorage, deleteStorageItem)

export { router }
