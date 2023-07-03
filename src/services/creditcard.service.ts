import { ICreditCard } from '../interfaces/creditCard.interface'
import { CreditCard } from '../models/mysql/creditCard.model'
// import { CreditCardModel } from '../models/nosql/creditCard.model'

export const getCreditCards = async (): Promise<any> => {
  const response = await CreditCard.findAll()
  return response
}

export const getCreditCard = async (tioAux: string): Promise<any> => {
  const response = await CreditCard.findOne({ where: { tioAux } })
  return response
}

export const insertCreditCard = async (data: ICreditCard): Promise<any> => {
  const response = await CreditCard.create(data)
  return response
}

export const updateCreditCard = async (
  tioAux: string,
  data: ICreditCard
): Promise<any> => {
  const response = await CreditCard.update(data, { where: { tioAux } })
  return response
}

export const deleteCreditCard = async (tioAux: string): Promise<any> => {
  const response = await CreditCard.destroy({ where: { tioAux } })
  return response
}
