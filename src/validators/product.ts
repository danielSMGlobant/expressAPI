import { check, validationResult } from 'express-validator'
import { isBrand } from '../utils'
import { NextFunction, Request, Response } from 'express'
// import { validateResult } from '../helpers/validateHelper'

const isBrandValidate = (value: any): boolean => {
  if (!isBrand(value)) {
    console.log(value)
    throw new Error('Solo se permite ingresar VISA o AMEX')
  }
  return true
}

const patternTioAux = /^[a-zA-Z0-9]{6}$/

export const validatorCreateProduct = [
  check('bin').exists().not().isEmpty().isString(),
  check('logoCode')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .withMessage('Debe ser caracteres')
    .isLength({ min: 3, max: 3 })
    .withMessage('Valor de un logoCode es de 3 carácteres'),
  check('tioAux')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(patternTioAux)
    .withMessage('No cumple con la estructura de un tioAux'),
  check('name').exists().not().isEmpty().isString(),
  check('commercialName').exists().not().isEmpty().isString(),
  check('brandName').exists().notEmpty().isString().custom(isBrandValidate)

  //   (req: any, res: any, next: any) => {
  //     console.log(req.body)
  //     validateResult(res, req, next)
  //   }
]

export const validatorQueryFilterProduct = [
  check('search').exists(),
  check('status').exists(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(422).json({ error: errors.array() })
  }
]
