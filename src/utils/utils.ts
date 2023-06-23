import { Visibility, Weather } from '../interfaces/enums'
import { NewDiaryEntry, NewImc } from '../types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Iconrrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newData: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newData
}

export const validateQueryString = (queryParmeters: object): any => {
  if (Object.keys(queryParmeters).length === 0) {
    throw new Error('No se envio ningun valor en los parametros')
  }
  return queryParmeters
}

const parseWeight = (weightFromRequest: any): number => {
  if (isNaN(weightFromRequest)) {
    throw new Error('No se envio correctamente el valor de weight')
  }
  return Number(weightFromRequest)
}

const parseHeight = (heightFromRequest: any): number => {
  if (isNaN(heightFromRequest)) {
    throw new Error('No se envio correctamente el valor de height')
  }
  return Number(heightFromRequest)
}

export const toNewImc = (object: any): NewImc => {
  const newData: NewImc = {
    weight: parseWeight(object.weight),
    height: parseHeight(object.height)
  }

  return newData
}
