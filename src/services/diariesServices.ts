import { DiaryEntry, DiaryEntryWithoutComments, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntryWithoutComments | undefined => {
  const entry = diaries.find((d) => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry // para quitar la propiedad comment de la respuesta
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutComments = (): DiaryEntryWithoutComments[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newData: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newData
  }

  diaries.push(newDiary)
  return newDiary
}
