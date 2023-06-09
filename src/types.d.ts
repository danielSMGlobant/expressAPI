// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { Visibility, Weather } from './interfaces/enums'

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
