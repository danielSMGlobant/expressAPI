/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  deleteCreditCardItem,
  getCreditCardItem,
  getCreditCardItems,
  postCreditCardItem,
  putCreditCardItem
} from '../controllers/creditCard.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { checkRol } from '../middlewares/rol.middleware'
import {
  validatorCreateCreditCard,
  validatorTioAuxCreditCard,
  validatorUpdateCreditCard
} from '../validators/creditCard.validator'
const router = express.Router()

router.get('/', authMiddleware, checkRol(['User']), getCreditCardItems)

router.get(
  '/:tioAux',
  authMiddleware,
  checkRol(['User']),
  validatorTioAuxCreditCard,
  getCreditCardItem
)

router.post(
  '/',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCreateCreditCard,
  postCreditCardItem
)

router.put(
  '/:tioAux',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorTioAuxCreditCard,
  validatorUpdateCreditCard,
  putCreditCardItem
)

router.delete(
  '/:tioAux',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorTioAuxCreditCard,
  deleteCreditCardItem
)

export { router }
