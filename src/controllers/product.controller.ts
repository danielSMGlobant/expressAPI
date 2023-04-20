import { Request, Response } from 'express'
import * as productServices from '../services/product.service'
import { toTermSearch } from '../helpers/product.helpers'

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
  const product = productServices.findByTioAux(tioAux)

  res.status(typeof product === 'undefined' ? 204 : 200).send(product)
}
