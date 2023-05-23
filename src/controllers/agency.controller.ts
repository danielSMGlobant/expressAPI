import { Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import {
  deleteAgency,
  getAgencies,
  getAgency,
  insertAgency,
  updateAgency
} from '../services/agency.service'
import { IAgency } from '../interfaces/agency.interface'
import { matchedData } from 'express-validator'

export const getAgencyItems = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await getAgencies()
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS', error, 404)
  }
}

export const getAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const code = reqClean.code
    const response = await getAgency(code)
    res.status(response === null ? 204 : 200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM', error, 404)
  }
}

export const postAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const item: IAgency = reqClean as IAgency
    const response = await insertAgency(item)
    res.status(201).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_POST_ITEM', error, 400)
  }
}

export const putAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const { code, ...item } = reqClean
    const response = await updateAgency(code, item as IAgency)
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_PUT_ITEM', error, 404)
  }
}

export const deleteAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const code = reqClean.code
    const response = await deleteAgency(code)
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM', error, 404)
  }
}
