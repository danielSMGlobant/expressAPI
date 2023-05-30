import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResults } from '../utils/handlerValidator'

export const validatorCodeAgency = [
  check('code')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 5, max: 6 })
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
    .isLength({ min: 5, max: 6 })
    .withMessage('Debe tener 5 carácteres'),
  check('name').exists().notEmpty().isString(),
  check('status').exists().notEmpty().isBoolean(),
  check('region')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('province')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('district')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('geolocation')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage('Debe tener 6 carácteres'),
  check('address').exists().notEmpty().isString(),

  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export const validatorUpdateAgency = [
  check('name').exists().notEmpty().isString(),
  check('status').exists().notEmpty().isBoolean(),
  check('region')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('province')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('district')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage('Debe tener 2 carácteres'),
  check('geolocation')
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage('Debe tener 6 carácteres'),
  check('address').exists().notEmpty().isString(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]
