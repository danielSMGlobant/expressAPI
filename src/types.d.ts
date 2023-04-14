// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { NameBrand, ProgramBenefitCode, Visibility, Weather } from './enums'

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
  logo: string
  tio_aux: string
  name: string
  name_commercial: string
  name_brand: NameBrand
  plastic_value: string
  status: string
  plastic_choice: string
  nickname: string
  min_credit_card_line: string
  program_benefit_code: ProgramBenefitCode
}

export type ProductTcRequest = ProductTc
