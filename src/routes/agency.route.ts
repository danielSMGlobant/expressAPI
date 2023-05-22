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
const router = express.Router()

router.get('/', getAgencyItems)

router.get('/:code', validatorCodeAgency, getAgencyItem)

router.post('/', validatorCreateAgency, postAgencyItem)

router.put('/:code', validatorUpdateAgency, putAgencyItem)

router.delete('/:code', validatorCodeAgency, deleteAgencyItem)

export { router }
