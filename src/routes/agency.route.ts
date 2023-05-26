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
import { checkRol } from '../middlewares/rol.middleware'
const router = express.Router()

router.get('/', authMiddleware, checkRol(['User']), getAgencyItems)

router.get(
  '/:code',
  authMiddleware,
  checkRol(['User']),
  validatorCodeAgency,
  getAgencyItem
)

router.post(
  '/',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCreateAgency,
  postAgencyItem
)

router.put(
  '/:code',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCodeAgency,
  validatorUpdateAgency,
  putAgencyItem
)

router.delete(
  '/:code',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCodeAgency,
  deleteAgencyItem
)

export { router }
