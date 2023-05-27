import { check } from 'express-validator'
import { validateResults } from '../utils/handlerValidator'
import { NextFunction, Request, Response } from 'express'
import { isBrand } from '../utils/product.util'

const patternTioAux = /^[A-Z0-9]{6}$/

const isBrandValidate = (value: any): boolean => {
  if (!isBrand(value)) {
    console.log(value)
    throw new Error('Solo se permite ingresar VISA o AMEX')
  }
  return true
}

export const validatorTioAuxCreditCard = [
  check('tioAux')
    .exists()
    .notEmpty() // En un Path Params no aplica esto
    .withMessage('Se ha enviado vacio el valor tioaux')
    .matches(patternTioAux)
    .withMessage('No cumple con la estructura de un tioAux'),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export const validatorCreateCreditCard = [
  check('bin').exists().notEmpty().isString().isLength({ min: 6, max: 6 }),
  check('binStart').exists().isString().isLength({ max: 8 }),
  check('binEnd').exists().isString().isLength({ max: 8 }),
  check('logoCode')
    .exists()
    .notEmpty()
    .isString()
    .withMessage('Debe ser caracteres')
    .isLength({ min: 3, max: 3 })
    .withMessage('Valor de un logoCode es de 3 carácteres'),
  check('tioAux')
    .exists()
    .notEmpty()
    .isString()
    .matches(patternTioAux)
    .withMessage('No cumple con la estructura de un tioAux'),
  check('productName').exists().notEmpty().isString(),
  check('commercialName').exists().notEmpty().isString(),
  check('brandName').exists().notEmpty().isString().custom(isBrandValidate),
  check('creditCardLevel').exists().isNumeric(),
  check('status').exists().notEmpty().isBoolean().not().isString(),
  check('plasticChoice').exists().isBoolean().not().isString(),
  check('nickname').exists().isBoolean().not().isString(),
  check('minCreditLine').exists().isNumeric().not().isString(),
  check('maxCreditLine').exists().isNumeric(),
  check('programBenefitCode').exists().isString(),
  check('urlDesk').exists().notEmpty().isString(),
  check('urlMobile').exists().notEmpty().isString(),
  check('createdBy').exists().notEmpty().isString(),
  check('createdDate').exists().notEmpty().isString(),

  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export const validatorUpdateCreditCard = [
  check('bin').exists().notEmpty().isString().isLength({ min: 6, max: 6 }),
  check('binStart').exists().isString().isLength({ max: 8 }),
  check('binEnd').exists().isString().isLength({ max: 8 }),
  check('logoCode')
    .exists()
    .notEmpty()
    .isString()
    .withMessage('Debe ser caracteres')
    .isLength({ min: 3, max: 3 })
    .withMessage('Valor de un logoCode es de 3 carácteres'),
  check('productName').exists().notEmpty().isString(),
  check('commercialName').exists().notEmpty().isString(),
  check('brandName').exists().notEmpty().isString().custom(isBrandValidate),
  check('creditCardLevel').exists().isNumeric(),
  check('status').exists().notEmpty().isBoolean().not().isString(),
  check('plasticChoice').exists().isBoolean().not().isString(),
  check('nickname').exists().isBoolean().not().isString(),
  check('minCreditLine').exists().isNumeric().not().isString(),
  check('maxCreditLine').exists().isNumeric(),
  check('programBenefitCode').exists().isString(),
  check('urlDesk').exists().notEmpty().isString(),
  check('urlMobile').exists().notEmpty().isString(),
  check('lastModifiedBy').exists().notEmpty().isString(),
  check('lastModifiedDate').exists().notEmpty().isString(),

  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]
