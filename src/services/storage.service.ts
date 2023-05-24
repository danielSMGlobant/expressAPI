import { IStorage } from '../interfaces/storage.interface'
import { StorageModel } from '../models/nosql/storage.model'

export const insertStorage = async (data: IStorage): Promise<any> => {
  const response = await StorageModel.create(data)
  return response
}

export const getStorages = async (): Promise<any> => {
  const response = await StorageModel.find({})
  return response
}

export const getStorage = async (idStorage: any): Promise<any> => {
  const response = await StorageModel.findById(idStorage)
  return response
}

export const deleteStorage = async (idStorage: any): Promise<any> => {
  const response = await StorageModel.deleteOne({ _id: idStorage })
  return response
}
