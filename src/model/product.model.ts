import { BrandName, ProgramBenefitCode } from '../enums'

export interface ProductTc {
  bin: string
  logoCode: string
  tioAux: string
  binStart: string
  binEnd: string
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
  createdDate: string
  lastModifiedBy: string
  lastModifiedDate: string
}

// MÉTODO GET
export type ProductsTc = Pick<
ProductTc, 'bin'
| 'logoCode'
| 'tioAux'
| 'commercialName'
| 'brandName'
| 'status'
| 'urlDesk'
>

export type ProductTcCreateRequest = Omit<
ProductTc, 'lastModifiedBy' | 'lastModifiedDate'>

export type ProductTcUpdateRequest = Omit<
ProductTc, 'createdBy' | 'createdDate'>
