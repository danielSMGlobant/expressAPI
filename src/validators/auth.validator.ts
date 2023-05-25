import { check } from 'express-validator'
import { NextFunction, Request, Response } from 'express'
import { validateResults } from '../utils/handlerValidator'

export const validatorRegister = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 })
    .withMessage('Debe tener entre 3 a 99 carácteres'),
  check('age').exists().notEmpty().isNumeric(),
  check('mail').exists().notEmpty().isEmail(),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 25 })
    .withMessage('Debe tener entre 3 a 25 carácteres'),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export const validatorLogin = [
  check('mail').exists().notEmpty().isEmail(),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 25 })
    .withMessage('Debe tener entre 3 a 25 carácteres'),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]
