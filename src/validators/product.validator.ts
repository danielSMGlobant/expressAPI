import { check, validationResult } from 'express-validator'
import { isBrand } from '../utils/product.util'
import { NextFunction, Request, Response } from 'express'
import * as serviceProduct from '../services/product.service'
// import { validateResult } from '../helpers/validateHelper'
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

  // (req: any, res: any, next: any) => {
  //   validateResult(res, req, next)
  // }
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(400).json({ error: errors.array() }) // Remplazo 422 por 400
  }
]

export const validatorUpdateProduct = [
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
  check('lastModifiedBy').exists().notEmpty().isString(),
  check('lastModifiedDate').exists().notEmpty().isString(),

  // (req: any, res: any, next: any) => {
  //   validateResult(res, req, next)
  // }
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(400).json({ error: errors.array() }) // Remplazo 422 por 400
  }
]

export const validatorProductDuplicate = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (
    serviceProduct.validateProductExistence(
      req.body.tioAux,
      req.body.bin,
      req.body.logoCode
    )
  ) {
    res
      .status(404)
      .send({ message: 'Producto TC ya existe, no se puede volver a ingresar' })
  } else {
    next()
  }
}

export const validatorProductExistence = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (
    serviceProduct.validateProductExistence(
      req.params.tioAux,
      '',
      ''
      // req.body.bin,
      // req.body.logoCode
    )
  ) {
    next()
  } else {
    res.status(404).send({ message: 'Producto TC no existe' })
  }
}

export const validatorQueryFilterProduct = [
  // check('search').isString(),
  check('status')
    .exists()
    .withMessage('No se ha enviado el valor status')
    .notEmpty()
    .withMessage('Se ha enviado vacio el valor status')
    .isIn(['1', '0', '2'])
    .withMessage('No cumple con los valores permitiodos para status'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status(400).json({ error: errors.array() }) // Remplazo 422 por 400
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
    return res.status(400).json({ error: errors.array() }) // Remplazo 422 por 400
  }
]
