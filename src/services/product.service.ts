import { ProductTc, ProductTcRequest, ProductsTc } from './../types.d'
import productData from '../data/productTc.json'

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

export const filterProducts = (term: string, status: string): ProductsTc[] => {
  console.log('busqueda por ', term, status)
  const statusBoolean: boolean = status === 'true'

  const filterCriteria = (product: ProductsTc): any => {
    const containsTerm =
      product.tioAux.toLowerCase().includes(term.trim().toLowerCase()) ||
      product.commercialName.toLowerCase().includes(term.trim().toLowerCase())
    const hasMatchingStatus = product.status === statusBoolean
    return status.length === 0
      ? containsTerm
      : containsTerm && hasMatchingStatus
  }

  // const productsFilteredWithoutStatus = productsTc.filter(
  //   (product) =>
  //     product.tioAux.toLowerCase().includes(term.trim().toLowerCase()) ||
  //     product.commercialName.toLowerCase().includes(term.trim().toLowerCase())
  // )

  // const productsFilteredWithStatus = productsTc.filter(
  //   (product) =>
  //     (product.tioAux.toLowerCase().includes(term.trim().toLowerCase()) ||
  //       product.commercialName
  //         .toLowerCase()
  //         .includes(term.trim().toLowerCase())) &&
  //     product.status === statusBoolean
  // )
  const resultFilter: ProductsTc[] = productsTc.filter(filterCriteria)
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
