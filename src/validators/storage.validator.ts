import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResults } from '../utils/handlerValidator'

export const validatorIdStorage = [
  check('id').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

// No es necesario por que el uploadMiddleware lo valida
// export const validatorCreateStorage = [
//   check('url').exists().notEmpty().isString(),
//   check('fileName').exists().notEmpty().isString(),
//   (req: Request, res: Response, next: NextFunction) => {
//     return validateResults(req, res, next)
//   }
// ]
