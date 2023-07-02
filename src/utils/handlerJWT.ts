import jsonwebtoken from 'jsonwebtoken'
import { getProperties } from './handlerPropertiesEngine'

const PROPERTIES_KEY = getProperties()
const JWT_SECRET = process.env.JWT_SECRET as jsonwebtoken.Secret

export const tokenSing = (user: any): string => {
  const sign = jsonwebtoken.sign(
    {
      [PROPERTIES_KEY.id]: user.id,
      rol: user.rol
    },
    JWT_SECRET,
    {
      expiresIn: '2h'
    }
  )

  return sign
}

export const verifyToken = async (tokenJWT: string): Promise<any> => {
  try {
    return jsonwebtoken.verify(tokenJWT, JWT_SECRET)
  } catch (error) {
    console.error('Token inválido', error)
    return null
  }
}
