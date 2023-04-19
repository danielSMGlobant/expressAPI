import { Request, Response } from 'express'
import * as productServices from '../services/product.service'
import { toTermSearch } from '../helpers/product.helpers'
// import { validateResultFilter } from '../helpers/validateHelper'

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
