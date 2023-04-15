import { ProductTc, ProductTcRequest } from './../types.d'
import productData from '../data/productTc.json'

const productsTc: ProductTc[] = productData as ProductTc[]

export const getProductTc = (): ProductTc[] => productsTc

export const findByTioAux = (tioAuxRequest: string): ProductTc | undefined => {
  const product = productsTc.find((d) => d.tio_aux === tioAuxRequest)

  if (product != null) {
    return product
  }

  return undefined
}

export const addProductTc = (newData: ProductTcRequest): string => {
  productsTc.push(newData)
  return 'Se logró exponer de manera exitosa'
}

export const deleteProductTc = (tioAuxRequest: string): string => {
  const index = productsTc.findIndex((d) => d.tio_aux === tioAuxRequest)

  productsTc.splice(index, 1)

  return 'Producto Tc eliminado exitosamente'
}
