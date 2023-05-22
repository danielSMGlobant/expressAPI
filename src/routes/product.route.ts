import express from 'express'
import {
  validatoParamsTioAuxProduct,
  validatorCreateProduct,
  validatorQueryFilterProduct,
  validatorProductExistence,
  validatorProductDuplicate,
  validatorUpdateProduct
} from '../validators/product.validator'
import {
  getFilteredItems,
  getItemByTioAux,
  postItem,
  putItem
} from '../controllers/product.controller'

const router = express.Router()

// CONSULTAR A JSON
router.get('/', validatorQueryFilterProduct, getFilteredItems)
router.get('/:tioAux', validatoParamsTioAuxProduct, getItemByTioAux)
router.post('/', validatorCreateProduct, validatorProductDuplicate, postItem)
router.put(
  '/:tioAux',
  validatorUpdateProduct,
  validatorProductExistence,
  putItem
)

export { router }
