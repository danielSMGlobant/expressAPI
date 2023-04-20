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

const patternTioAux = /^[A-Z0-9]{6}$/

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
  // check('search').isString(),
  check('status')
    .exists()
    .withMessage('No se ha enviado vacio el valor status')
    .notEmpty()
    .withMessage('Se ha enviado vacio el valor status')
    .isIn(['1', '0', '2'])
    .withMessage('No cumple con los valores permitiodos para status'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(422).json({ error: errors.array() })
  }
]

export const validatoParamsTioAuxProduct = [
  check('tioAux')
    .exists()
    .notEmpty() // En un Path Params no aplica esto
    .withMessage('Se ha enviado vacio el valor tioaux')
    .matches(patternTioAux)
    .withMessage('No cumple con la estructura de un tioAux'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(422).json({ error: errors.array() })
  }
]
