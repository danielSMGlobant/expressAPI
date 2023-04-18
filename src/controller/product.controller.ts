import { Request, Response } from 'express'
import * as productServices from '../services/product.service'
// import { validateResultFilter } from '../helpers/validateHelper'

export const getItems = (_req: Request, res: Response): any => {
  res.send(productServices.getProductTc())
}

// export const getFilteredItems = (req: Request, res: Response): any => {
//   const { search, status } = req.query
//   res.send(productServices.filterProducts(String(search), Boolean(status)))
// }

export const getFilteredItems = (req: Request, res: Response): any => {
  const searchParams: string = String(req.query.search)
  // const statusParams: boolean = req.query.status === 'true'
  const statusParams: string = String(req.query.status)
  const filteredProducts = productServices.filterProducts(
    searchParams,
    statusParams
  )

  res.status(filteredProducts.length === 0 ? 204 : 200).send(filteredProducts)

  // if (filteredProducts.length === 0) {
  //   res.status(204).send()
  // } else {
  //   res.status(200).send(filteredProducts)
  // }
}
