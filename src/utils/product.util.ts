import { BrandName } from '../interfaces/enums'

export const toStatus = (value: any): boolean => {
  return String(value) === '1'
}

export const toTermSearch = (value: any): string => {
  const term: string = typeof value !== 'undefined' ? value : ''
  return term
}

export const isBrand = (param: any): boolean => {
  return Object.values(BrandName).includes(param)
}
