import { ProductTc, ProductTcRequest, ProductsTc } from './../types.d'
import productData from '../data/productTc.json'
import { toStatus } from '../helpers/product.helpers'

const productsTc: ProductTc[] = productData as ProductTc[]

export const getProductTc = (): ProductsTc[] => {
  const products = productsTc.map((item) => ({
    bin: item.bin,
    logoCode: item.logoCode,
    tioAux: item.tioAux,
    commercialName: item.commercialName,
    brandName: item.brandName,
    status: item.status,
    urlDesk: item.urlDesk
  }))

  return products
}

export const filterProducts = (status: string, term: string): ProductsTc[] => {
  const statusFilter: boolean = toStatus(status)

  const filterCriteria = (product: ProductsTc): any => {
    const containsTerm =
      product.tioAux.toLowerCase().includes(term.trim().toLowerCase()) ||
      product.commercialName
        .toLowerCase()
        .includes(term.trim().toLowerCase())
    const hasMatchingStatus = product.status === statusFilter
    return status === 'all' ? containsTerm : containsTerm && hasMatchingStatus
  }
  const resultFilter: ProductsTc[] = getProductTc().filter(filterCriteria)
  return resultFilter
}

export const findByTioAux = (tioAuxRequest: string): ProductTc | undefined => {
  const product = productsTc.find((d) => d.tioAux === tioAuxRequest)

  if (product != null) {
    return product
  }

  return undefined
}

export const addProductTc = (newData: ProductTcRequest): string => {
  productsTc.push(newData)
  return 'Se logró insertar de manera exitosa'
}

export const deleteProductTc = (tioAuxRequest: string): string => {
  const index = productsTc.findIndex((d) => d.tioAux === tioAuxRequest)

  productsTc.splice(index, 1)

  return 'Producto Tc eliminado exitosamente'
}
