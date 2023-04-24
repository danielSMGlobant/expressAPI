import {
  ProductTc,
  ProductTcCreateRequest,
  ProductTcUpdateRequest,
  ProductsTc
} from '../model/product.model'
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
      product.commercialName.toLowerCase().includes(term.trim().toLowerCase())
    const hasMatchingStatus = product.status === statusFilter
    return status === '2' ? containsTerm : containsTerm && hasMatchingStatus
  }
  const resultFilter: ProductsTc[] = getProductTc().filter(filterCriteria)
  return resultFilter
}

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

    return (hasMatchingTioAux || hasMatchingBin || hasMatchingLogo)
  }

  const productFind = productsTc.find(findCriteria)

  return typeof productFind !== 'undefined'
}

export const findByTioAux = (tioAuxRequest: string): ProductTc | undefined => {
  const product = productsTc.find((d) => d.tioAux === tioAuxRequest)

  if (product != null) {
    return product
  }

  return undefined
}

export const addProductTc = (newData: ProductTcCreateRequest): string => {
  const newDataCreate: ProductTc = {
    ...newData,
    lastModifiedBy: '',
    lastModifiedDate: ''
  }
  productsTc.push(newDataCreate)
  return 'Se logró insertar de manera exitosa'
}

export const updateProductTc = (updateData: ProductTcUpdateRequest): string => {
  const index = productsTc.findIndex((product) => product.tioAux === updateData.tioAux)
  const newDataUpdate: ProductTc = {
    ...updateData,
    createdBy: productsTc[index].createdBy,
    createdDate: productsTc[index].createdDate
  }

  if (index !== -1) {
    productsTc[index] = newDataUpdate
  }
  return 'Se logró actualizar de manera exitosa'
}

export const deleteProductTc = (tioAuxRequest: string): string => {
  const index = productsTc.findIndex((d) => d.tioAux === tioAuxRequest)

  productsTc.splice(index, 1)

  return 'Producto Tc eliminado exitosamente'
}
