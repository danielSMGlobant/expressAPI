import { BrandName, ProgramBenefitCode } from './enums'

export interface IProductTc {
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
IProductTc,
| 'bin'
| 'logoCode'
| 'tioAux'
| 'commercialName'
| 'brandName'
| 'status'
| 'urlDesk'
>

export type ProductTcCreateRequest = Omit<
IProductTc,
'lastModifiedBy' | 'lastModifiedDate'
>

export type ProductTcUpdateRequest = Omit<
IProductTc,
'createdBy' | 'createdDate'
>
