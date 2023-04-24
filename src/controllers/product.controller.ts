import { Request, Response } from 'express'
import * as productServices from '../services/product.service'
import { toTermSearch } from '../helpers/product.helpers'
import { ProductTc, ProductTcCreateRequest } from '../model/product.model'

export const getItems = (_req: Request, res: Response): any => {
  res.send(productServices.getProductTc())
}

export const getFilteredItems = (req: Request, res: Response): any => {
  const filteredProducts = productServices.filterProducts(
    String(req.query.status),
    toTermSearch(req.query.search)
  )

  res.status(filteredProducts.length === 0 ? 204 : 200).send(filteredProducts)
}

export const getItemByTioAux = (req: Request, res: Response): any => {
  const tioAux: string = req.params.tioAux
  const product: ProductTc | undefined = productServices.findByTioAux(tioAux)

  res.status(typeof product === 'undefined' ? 204 : 200).send(product)
}

export const postItem = (req: Request, res: Response): any => {
  const product: ProductTcCreateRequest = req.body
  const respuesta = productServices.addProductTc(product)
  res.status(201).json({ message: respuesta, product })
}

export const putItem = (req: Request, res: Response): any => {
  const product: ProductTc = req.body
  const respuesta = productServices.updateProductTc(product)
  res.status(200).json({ message: respuesta, product })
}
