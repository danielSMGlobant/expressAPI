import { Response } from 'express'

export const handleHttpError = (
  res: Response,
  message: string,
  errorDetail?: any,
  codeError: number = 403
): any => {
  console.log(errorDetail)
  res.status(codeError)
  res.send({ error: message })
}

export const handleHttp = (
  res: Response,
  error: string,
  errorDetail?: any
): any => {
  console.log(errorDetail)
  res.status(500)
  res.send({ error })
}
