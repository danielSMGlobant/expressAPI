import { Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import { getStorages, insertStorage } from '../services/storage.service'

const PUBLIC_URL = String(process.env.PUBLIC_URL)

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
    handleHttpError(res, 'ERROR_POST_STORAGE', error, 400)
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
