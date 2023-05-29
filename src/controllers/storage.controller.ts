import { Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import {
  deleteStorage,
  getStorage,
  getStorages,
  insertStorage
} from '../services/storage.service'
import { matchedData } from 'express-validator'
import fs from 'fs'
import path from 'path'

const PUBLIC_URL = String(process.env.PUBLIC_URL)
const MEDIA_PATH = path.resolve(__dirname, '../storage')

export const postStorage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const file = req.file
    const fileNameData = file?.filename ?? ''
    const fileData = {
      fileName: fileNameData,
      url: `${PUBLIC_URL}/${fileNameData}`
    }
    const response = await insertStorage(fileData)
    res.status(201).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_POST_STORAGE', error, 404)
  }
}

export const getStorageItems = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await getStorages()
    res.status(200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS', error, 404)
  }
}

export const getStorageItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = matchedData(req)
    const response = await getStorage(id)
    res.status(response === null ? 204 : 200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM', error, 404)
  }
}

export const deleteStorageItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = matchedData(req)
    const data = await getStorage(id)
    const { fileName } = data
    const filePath = `${MEDIA_PATH}/${String(fileName)}`
    fs.unlinkSync(filePath)
    const response = await deleteStorage(id)
    res.status(response === null ? 204 : 200).send(response)
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM', error, 404)
  }
}
