import { Request, Response } from 'express'
import * as productServices from '../services/product.service'
import { toTermSearch } from '../utils/product.util'
import { handleHttp } from '../utils/handlerError'

// CONSULTAR A JSON
// export const getItems = (_req: Request, res: Response): any => {
//   try {
//     res.send(productServices.getProductTc())
//   } catch (error) {
//     handleHttp(res, 'ERROR_GET_ITEMS', error)
//   }
// }

export const getFilteredItems = (req: Request, res: Response): any => {
  try {
    const filteredProducts = productServices.filterProducts(
      req.query.status as string,
      toTermSearch(req.query.search)
    )

    res.status(filteredProducts.length === 0 ? 204 : 200).send(filteredProducts)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
  }
}

export const getItemByTioAux = (req: Request, res: Response): any => {
  try {
    const product = productServices.findByTioAux(req.params.tioAux)
    res.status(typeof product === 'undefined' ? 204 : 200).send(product)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}

export const postItem = (req: Request, res: Response): any => {
  try {
    const product = req.body
    const respuesta = productServices.addProductTc(product)
    res.status(201).json({
      message: 'Se logró insertar de manera exitosa',
      product: respuesta
    })
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

export const putItem = (req: Request, res: Response): any => {
  try {
    const product = req.body
    const respuesta = productServices.updateProductTc(product)
    res.status(200).json({
      message: 'Se logró actualizar de manera exitosa',
      product: respuesta
    })
  } catch (error) {
    handleHttp(res, 'ERROR_PUT_ITEM', error)
  }
}
