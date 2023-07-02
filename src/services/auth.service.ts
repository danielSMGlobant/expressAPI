import { IUser } from '../interfaces/auth.interface'
import { User } from '../models/mysql/user.model'
import { UserModel } from '../models/nosql/user.model'
import { getProperties } from '../utils/handlerPropertiesEngine'

const PROPERTIES_KEY = getProperties()

export const registerUserAuth = async (data: IUser): Promise<any> => {
  // const response = await UserModel.create(data)
  const response = await User.create(data)
  return response
}

export const getUserAuth = async (mailUser: string): Promise<any> => {
  const QUERY = { where: { mail: mailUser } }
  const response = await User.findOne(QUERY)
  return response
}

export const getUserSessionAuth = async (id: any): Promise<any> => {
  const QUERY = {
    [PROPERTIES_KEY.id]: id
  }
  const response = await UserModel.findOne(QUERY)
  return response
}
