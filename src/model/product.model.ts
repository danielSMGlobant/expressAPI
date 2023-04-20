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
  creditCardLevel: string
  status: boolean
  plasticChoice: boolean
  nickname: boolean
  minCreditLine: string
  maxCreditLine: string
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
ProductTc,
| 'bin'
| 'logoCode'
| 'tioAux'
| 'commercialName'
| 'brandName'
| 'status'
| 'urlDesk'
>

export type ProductTcRequest = ProductTc
