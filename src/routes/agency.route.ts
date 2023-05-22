/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  deleteAgencyItem,
  getAgencyItem,
  getAgencyItems,
  postAgencyItem,
  putAgencyItem
} from '../controllers/agency.controller'
const router = express.Router()

router.get('/', getAgencyItems)

router.get('/:code', getAgencyItem)

router.post('/', postAgencyItem)

router.put('/:code', putAgencyItem)

router.delete('/:code', deleteAgencyItem)

export { router }
