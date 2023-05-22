import { NextFunction, Request, Response } from 'express'

export const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const apiKey = req.headers.api_key
    if (apiKey === 'dani123') {
      next()
    } else {
      res.status(403)
      res.send({ error: 'ERROR_AUTENTICATION' })
    }
  } catch (error) {
    res.status(400)
    res.send({ error: 'ERROR_EN_LOGMIDDLEWARE' })
  }
}
