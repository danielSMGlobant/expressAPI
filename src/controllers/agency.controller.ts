import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import {
  deleteAgency,
  getAgencies,
  getAgency,
  insertAgency,
  updateAgency
} from '../services/agency.service'
import { IAgency } from '../interfaces/agency.interface'

export const getAgencyItems = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await getAgencies()
    res.status(200).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
  }
}

export const getAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const code = req.params.code
    const response = await getAgency(code)
    res.status(response === null ? 204 : 200).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}

export const postAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const item: IAgency = req.body
    const response = await insertAgency(item)
    res.status(201).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

export const putAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const code = req.params.code
    const item: IAgency = req.body
    const response = await updateAgency(code, item)
    res.status(200).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_PUT_ITEM', error)
  }
}

export const deleteAgencyItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const code = req.params.code
    const response = await deleteAgency(code)
    res.status(200).send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM', error)
  }
}
