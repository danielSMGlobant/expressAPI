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
      res.status(204).send()
    } else {
      res.send(product)
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

router.post('/', (req, res) => {
  try {
    // const data: ProductTcRequest = toNewProductTc(req.body)
    const respuesta = productServices.addProductTc(req.body)
    res.send(respuesta)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.put('/', (_req, res) => {
  res.send('Se actualizó exitosamente')
})

router.delete('/:id', (_req, res) => {
  res.send('Se elimino exitosamente')
})

export default router
