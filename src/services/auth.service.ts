import { IUser } from '../interfaces/auth.interface'
import { UserModel } from '../models/nosql/user.model'

export const registerUserAuth = async (data: IUser): Promise<any> => {
  const response = await UserModel.create(data)
  return response
}

export const getUserAuth = async (mailUser: string): Promise<any> => {
  const response = await UserModel.findOne({ mail: mailUser }).select(
    'name mail rol password'
  )
  return response
}
