import bcryptjs from 'bcryptjs'

export const encrypt = async (passwordPlain: string): Promise<string> => {
  const hash = await bcryptjs.hash(passwordPlain, 10)
  return hash
}

export const compare = async (
  passwordPlain: string,
  hashPassword: string
): Promise<boolean> => {
  const respuesta: boolean = await bcryptjs.compare(passwordPlain, hashPassword)
  return respuesta
}
