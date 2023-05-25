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

const router = express.Router()

router.get('/', getStorageItems)

router.get('/:id', validatorIdStorage, getStorageItem)

router.post('/', uploadMiddleware.single('myFile'), postStorage)

router.delete('/:id', validatorIdStorage, deleteStorageItem)

export { router }
