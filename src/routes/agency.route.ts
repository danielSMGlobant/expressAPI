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
import { logMiddleware } from '../middlewares/log.middleware'
const router = express.Router()

router.get('/', logMiddleware, getAgencyItems)

router.get('/:code', logMiddleware, validatorCodeAgency, getAgencyItem)

router.post('/', validatorCreateAgency, postAgencyItem)

router.put('/:code', validatorCodeAgency, validatorUpdateAgency, putAgencyItem)

router.delete('/:code', validatorCodeAgency, deleteAgencyItem)

export { router }
