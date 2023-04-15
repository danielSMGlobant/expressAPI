import { validateTioAux } from './../utils'
import express from 'express'
import * as productServices from '../services/product.service'
// import { ProductTcRequest } from '../types'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(productServices.getProductTc())
})

router.get('/:tioAux', (req, res) => {
  try {
    const tioAux: string = validateTioAux(req.params.tioAux)
    const product = productServices.findByTioAux(tioAux)
    if (product === undefined) {
      res.status(204).send() // No Content - La solicitud ha sido exitosa pero no devuelve contenido
    } else {
      res.send(product)
    }
  } catch (error: any) {
    res.status(400).send(error.message) // Bad Request - La solicitud no es válida o tiene parámetros incorrectos
  }
})

router.post('/', (req, res) => {
  try {
    // const data: ProductTcRequest = toNewProductTc(req.body)
    const respuesta = productServices.addProductTc(req.body)
    res.send(respuesta)
  } catch (error) {
    res.status(400).send(error) // Bad Request - La solicitud no es válida o tiene parámetros incorrectos
  }
})

router.put('/', (_req, res) => {
  res.send('Se actualizó exitosamente')
})

router.delete('/:tioAux', (req, res) => {
  try {
    const tioAux: string = validateTioAux(req.params.tioAux)
    const product = productServices.findByTioAux(tioAux)
    if (product === undefined) {
      res.status(404).send('Producto Tc no existe') // Not Found - El recurso solicitado no existe
    } else {
      const respuesta = productServices.deleteProductTc(product.tio_aux)
      res.send(respuesta)
    }
  } catch (error: any) {
    res.status(400).send(error.message) // Bad Request - La solicitud no es válida o tiene parámetros incorrectos
  }
})

export default router
