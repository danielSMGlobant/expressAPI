import { NextFunction, Request, Response } from 'express'
import { handleHttpError } from '../utils/handlerError'

export const checkRol =
  (roles: string[]) => (_req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = res.locals
      const rolesByUser = user.rol

      const checkValidRol: boolean = roles.some((rol) =>
        rolesByUser.includes(rol)
      )

      if (!checkValidRol) {
        handleHttpError(
          res,
          'USER_NOT_PERMISION',
          'Usuerio no tiene permisos',
          403
        )
        return
      }
      next()
    } catch (error) {
      handleHttpError(res, 'ERROR_PERMISION', 'No tiene permisos', 403)
      /*
        403 Forbidden - Este código de estado se utiliza cuando el servidor
        comprende la solicitud del cliente, pero se niega a completarla debido a
        que el cliente no tiene los permisos necesarios para acceder al recurso solicitado.
      */
    }
  }
