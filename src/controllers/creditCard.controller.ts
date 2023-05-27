import { Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import {
  deleteCreditCard,
  getCreditCard,
  getCreditCards,
  insertCreditCard,
  updateCreditCard
} from '../services/creditcard.service'
import { matchedData } from 'express-validator'
import { ICreditCard } from '../interfaces/creditCard.interface'

export const getCreditCardItems = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await getCreditCards()
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS', error, 404)
  }
}

export const getCreditCardItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const tioAux = reqClean.tioAux
    const response = await getCreditCard(tioAux)
    res.status(response === null ? 204 : 200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS', error, 404)
  }
}

export const postCreditCardItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const item: ICreditCard = reqClean as ICreditCard
    const response = await insertCreditCard(item)
    res.status(201).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_POST_ITEMS', error, 404)
  }
}

export const putCreditCardItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const { tioAux, ...item } = reqClean
    const response = await updateCreditCard(tioAux, item as ICreditCard)
    res.status(201).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_PUT_ITEM', error, 404)
  }
}

export const deleteCreditCardItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const tioAux = reqClean.tioAux
    const response = await deleteCreditCard(tioAux)
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM', error, 404)
  }
}
