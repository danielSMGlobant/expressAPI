/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  deleteAgencyItem,
  getAgencyItem,
  getAgencyItems,
  postAgencyItem,
  putAgencyItem
} from '../controllers/agency.controller'
import {
  validatorCodeAgency,
  validatorCreateAgency,
  validatorUpdateAgency
} from '../validators/agency.validator'
import { authMiddleware } from '../middlewares/auth.middleware'
const router = express.Router()

router.get('/', authMiddleware, getAgencyItems)

router.get('/:code', authMiddleware, validatorCodeAgency, getAgencyItem)

router.post('/', authMiddleware, validatorCreateAgency, postAgencyItem)

router.put(
  '/:code',
  authMiddleware,
  validatorCodeAgency,
  validatorUpdateAgency,
  putAgencyItem
)

router.delete('/:code', authMiddleware, validatorCodeAgency, deleteAgencyItem)

export { router }
