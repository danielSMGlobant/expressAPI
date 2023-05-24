import mongoose from 'mongoose'
import { IStorage } from '../../interfaces/storage.interface'

const StorageSchema = new mongoose.Schema<IStorage>(
  {
    url: {
      type: String
    },
    fileName: {
      type: String
    }
  },
  {
    timestamps: true, // TODO: createAt, updateAt
    versionKey: false
  }
)

export const StorageModel = mongoose.model('storages', StorageSchema)
