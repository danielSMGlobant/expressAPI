import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResults } from '../utils/handlerValidator'

export const validatorCodeAgency = [
  check('code')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 5, max: 5 })
    .withMessage('Debe tener 5 carácteres'),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]
export const validatorCreateAgency = [
  check('code')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 5, max: 5 })
    .withMessage('Debe tener 5 carácteres'),
  check('name').exists().notEmpty().isString(),
  check('status').exists().notEmpty().isBoolean(),
  check('year')
    .exists()
    .notEmpty()
    .isNumeric()
    .isLength({ min: 4, max: 4 })
    .withMessage('Debe tener 4 carácteres'),
  check('address').exists().notEmpty().isString(),
  check('ubigeo')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage('Debe tener 6 carácteres'),
  (req: Request, res: Response, next: NextFunction) => {
    // try {
    //   validationResult(req).throw()
    //   return next()
    // } catch (error: any) {
    //   res.status(400)
    //   res.send({ error: error.array() })
    // }
    return validateResults(req, res, next)
  }
]

export const validatorUpdateAgency = [
  check('name').exists().notEmpty().isString(),
  check('status').exists().notEmpty().isBoolean(),
  check('year')
    .exists()
    .notEmpty()
    .isNumeric()
    .isLength({ min: 4, max: 4 })
    .withMessage('Debe tener 4 carácteres'),
  check('address').exists().notEmpty().isString(),
  check('ubigeo')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage('Debe tener 6 carácteres'),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]
