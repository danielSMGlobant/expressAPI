import { Response } from 'express'

export const handleHttp = (
  res: Response,
  error: string,
  errorDetail?: any
): any => {
  console.log(errorDetail)
  res.status(500)
  res.send({ error })
}
