import { BrandName, ProgramBenefitCode } from './enums'

export interface ICreditCard {
  bin: string
  binStart: string
  binEnd: string
  logoCode: string
  tioAux: string
  productName: string
  commercialName: string
  brandName: BrandName
  creditCardLevel: number
  status: boolean
  plasticChoice: boolean
  nickname: boolean
  minCreditLine: number
  maxCreditLine: number
  programBenefitCode: ProgramBenefitCode
  urlDesk: string
  urlMobile: string
  createdBy: string
  createdDate: string // TODO: Cambiar a Date
  lastModifiedBy: string
  lastModifiedDate: string // TODO: Cambiar a Date
}
