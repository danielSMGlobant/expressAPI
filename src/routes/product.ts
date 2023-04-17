import { validateTioAux } from './../utils'
import express, { NextFunction, Request, Response } from 'express'
import * as productServices from '../services/product.service'
import { validatorCreateProduct } from '../validators/product'
import { validateResult } from '../helpers/validateHelper'

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

// Ruta POST para crear un nuevo producto
router.post('/', validatorCreateProduct, (req: Request, res: Response, next: NextFunction) => {
  try {
    validateResult(req, res, next)
    const product = req.body
    const respuesta = productServices.addProductTc(product)
    res.status(201).json({ message: respuesta, product })
  } catch (error) {
    // console.log('error', error)
  }
})

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
