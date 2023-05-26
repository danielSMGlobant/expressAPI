import { NextFunction, Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'
import { verifyToken } from '../utils/handlerJWT'
import { getUserSessionAuth } from '../services/auth.service'

// Extender la interfaz Request de Express para agregar un valor user
// declare module 'express' {
//   interface Request {
//     user: string
//   }
// }

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (typeof req.headers.authorization === 'undefined') {
      handleHttpError(res, 'NOT_TOKEN', 'No ingresó token', 401)
      return
    }

    const token: string = String(req.headers.authorization.split(' ').pop())
    const dataToken = await verifyToken(token)

    if (dataToken._id === undefined) {
      handleHttpError(
        res,
        'ERROR_ID_TOKEN',
        'No se encontró el ID del token',
        401
      )
      return
    }

    const userSession = await getUserSessionAuth(dataToken._id)
    // req.user = userSession // NO PUEDO USARLO POR QUE ME SALE UN ERROR QUE EL VALOR USER NO ES PARTE DE REQUEST en EXPRESS

    console.log(userSession)
    next()
  } catch (error) {
    handleHttpError(res, 'NOT_SESSION', 'No tiene sesion valida', 401)
  }
}
