import { check } from 'express-validator'
import { isBrand } from '../utils'
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
  check('logo')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .withMessage('Debe ser caracteres')
    .isLength({ min: 3, max: 3 })
    .withMessage('Valor de un logo es de 3 carácteres'),
  check('tio_aux')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(patternTioAux)
    .withMessage('No cumple con la estructura de un Tio_Aux'),
  check('name').exists().not().isEmpty().isString(),
  check('name_commercial').exists().not().isEmpty().isString(),
  check('name_brand').exists().notEmpty().isString().custom(isBrandValidate)

  //   (req: any, res: any, next: any) => {
  //     console.log(req.body)
  //     validateResult(res, req, next)
  //   }
]
