import { Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import { matchedData } from 'express-validator'
import { compare, encrypt } from '../utils/handlerPassword'
import { getUserAuth, registerUserAuth } from '../services/auth.service'
import { IUser } from '../interfaces/auth.interface'
import { tokenSing } from '../utils/handlerJWT'

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const passwordHash = await encrypt(reqClean.password)
    const body = { ...reqClean, password: passwordHash }
    const dataUser = await registerUserAuth(body as IUser)
    dataUser.set('password', undefined, { strict: false })

    const data = {
      token: tokenSing(dataUser),
      user: dataUser
    }

    res.status(201).send(data)
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER', error, 404)
  }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const reqClean = matchedData(req)
    const dataUser = await getUserAuth(reqClean.mail)
    if (dataUser === undefined) {
      handleHttpError(res, 'USERT_NOT_EXIST', 'No se encontro al usuario', 404)
      return
    }

    const hashPassword = dataUser.password

    const checkPassword = await compare(reqClean.password, hashPassword)

    if (!checkPassword) {
      handleHttpError(res, 'PASSWORD_INVALID', 'Password invalido', 401)
      return
    }

    dataUser.set('password', undefined, { strict: false })
    const data = {
      token: tokenSing(dataUser),
      user: dataUser
    }
    res.status(201).send(data)
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN', error, 404)
  }
}
