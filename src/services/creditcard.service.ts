import { ICreditCard } from '../interfaces/creditCard.interface'
import { CreditCardModel } from '../models/nosql/creditCard.model'

export const getCreditCards = async (): Promise<any> => {
  const response = await CreditCardModel.find({})
  return response
}

export const getCreditCard = async (tioAux: string): Promise<any> => {
  const response = await CreditCardModel.findOne({ tioAux })
  return response
}

export const insertCreditCard = async (data: ICreditCard): Promise<any> => {
  const response = await CreditCardModel.create(data)
  return response
}

export const updateCreditCard = async (
  tioAux: string,
  data: ICreditCard
): Promise<any> => {
  const response = await CreditCardModel.findOneAndUpdate({ tioAux }, data, {
    new: true
  })
  return response
}

export const deleteCreditCard = async (tioAux: string): Promise<any> => {
  const response = await CreditCardModel.deleteOne({ tioAux })
  return response
}
