import { validateTioAux } from '../utils'
import express from 'express'
import * as productServices from '../services/product.service'
import { validatoParamsTioAuxProduct, validatorCreateProduct, validatorQueryFilterProduct, validatorProductExistence } from '../validators/product.validator'
import { getFilteredItems, getItemByTioAux, postItem } from '../controllers/product.controller'

// import { ProductTcRequest } from '../types'
const router = express.Router()

router.get('/', validatorQueryFilterProduct, getFilteredItems)

router.get('/:tioAux', validatoParamsTioAuxProduct, getItemByTioAux)

router.post('/', validatorCreateProduct, validatorProductExistence, postItem)

router.put('/:tioAux', (_req, res) => {
  res.send('Se actualizó exitosamente')
})

router.delete('/:tioAux', (req, res) => {
  try {
    const tioAux: string = validateTioAux(req.params.tioAux)
    const product = productServices.findByTioAux(tioAux)
    if (product === undefined) {
      res.status(404).send('Producto Tc no existe') // Not Found - El recurso solicitado no existe
    } else {
      const respuesta = productServices.deleteProductTc(product.tioAux)
      res.send(respuesta)
    }
  } catch (error: any) {
    res.status(400).send(error.message) // Bad Request - La solicitud no es válida o tiene parámetros incorrectos
  }
})

export default router
