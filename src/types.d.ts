// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { brandName, ProgramBenefitCode, Visibility, Weather } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type DiaryEntryWithoutComments = Pick<DiaryEntry, 'id' | 'date'>
export type DiaryEntryWithoutComments = Omit<DiaryEntry, 'comment'> // Con esto puedo eliminar una propiedad de una interface para reusarlo
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export interface Imc {
  weight: number
  height: number
  bmi: string
}

export type NewImc = Omit<Imc, 'bmi'>

export interface ProductTc {
  bin: string
  logoCode: string
  tioAux: string
  binStart: string
  binEnd: string
  productName: string
  commercialName: string
  brandName: brandName
  creditCardLevel: string
  status: string
  plasticChoice: string
  nickname: string
  minCreditLine: string
  maxCreditLine: string
  programBenefitCode: ProgramBenefitCode
  urlDesk: String
  urlMobile: String
}

export type ProductsTc = Omit<
ProductTc,
| 'binStart'
| 'binEnd'
| 'productName'
| 'creditCardLevel'
| 'plasticChoice'
| 'nickname'
| 'minCreditLine'
| 'maxCreditLine'
| 'programBenefitCode'
| 'urlMobile'
>
export type ProductTcRequest = ProductTc
