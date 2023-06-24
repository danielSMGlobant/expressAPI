import {
  IProductTc,
  ProductTcCreateRequest,
  ProductTcUpdateRequest,
  ProductsTc
} from '../interfaces/product.interface'
import productData from '../data/productTc.json'
import { toStatus } from '../utils/product.util'

const productsTcData: IProductTc[] = productData as IProductTc[]

export const getProductTc = (): ProductsTc[] => {
  const products = productsTcData.map((item) => ({
    bin: item.bin,
    logoCode: item.logoCode,
    tioAux: item.tioAux,
    commercialName: item.commercialName,
    brandName: item.brandName,
    status: item.status,
    creditCardLevel: item.creditCardLevel,
    urlDesk: item.urlDesk
  }))

  return products
}

export const filterProducts = (status: string, term: string): ProductsTc[] => {
  const statusFilter: boolean = toStatus(status)

  const filterCriteria = (product: ProductsTc): any => {
    const containsTerm =
      product.tioAux.toLowerCase().includes(term.trim().toLowerCase()) ||
      product.commercialName.toLowerCase().includes(term.trim().toLowerCase())
    const hasMatchingStatus = product.status === statusFilter
    return status === '2' ? containsTerm : containsTerm && hasMatchingStatus
  }
  const resultFilter: ProductsTc[] = getProductTc().filter(filterCriteria)
  return resultFilter
}

export const findByTioAux = (tioAuxRequest: string): IProductTc | undefined => {
  const product = productsTcData.find((d) => d.tioAux === tioAuxRequest)
  return product
}

export const addProductTc = (newData: ProductTcCreateRequest): IProductTc => {
  const newDataCreate: IProductTc = {
    ...newData,
    lastModifiedBy: '',
    lastModifiedDate: ''
  }
  productsTcData.push(newDataCreate)
  return newDataCreate
}

export const updateProductTc = (
  updateData: ProductTcUpdateRequest
): IProductTc => {
  const index = productsTcData.findIndex(
    (product) => product.tioAux === updateData.tioAux
  )
  const newDataUpdate: IProductTc = {
    ...updateData,
    createdBy: productsTcData[index].createdBy,
    createdDate: productsTcData[index].createdDate
  }

  if (index !== -1) {
    productsTcData[index] = newDataUpdate
  }
  return newDataUpdate
}

// export const deleteProductTc = (tioAuxRequest: string): string => {
//   const index = productsTcData.findIndex((d) => d.tioAux === tioAuxRequest)

//   productsTcData.splice(index, 1)

//   return 'Producto Tc eliminado exitosamente'
// }

export const validateProductExistence = (
  tioAux: string,
  bin: string,
  logo: string
): boolean => {
  const findCriteria = (product: ProductsTc): any => {
    // const hasMatchingStatus = product.status
    const hasMatchingTioAux = product.tioAux === tioAux
    const hasMatchingBin = product.bin === bin
    const hasMatchingLogo = product.logoCode === logo

    return hasMatchingTioAux || hasMatchingBin || hasMatchingLogo
  }

  const productFind = productsTcData.find(findCriteria)

  return typeof productFind !== 'undefined'
}
