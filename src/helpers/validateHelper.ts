import { validationResult } from 'express-validator'

// Creamos una función llamada "validateResult".
export const validateResult = (req: any, res: any, next: any): any => {
  try {
    validationResult(req).throw() // Ejecutamos la validación utilizando el módulo importado y lanzamos el error si no pasa la validación.
    return next() // Si la validación pasa, llamamos a la siguiente función middleware.
  } catch (error: any) {
    console.log('entro al validateResult error')
    res.status(422) // Si no pasa la validación, establecemos un código de estado 422 para indicar al cliente que la solicitud contiene errores de validación.
    res.send({ errors: error.array() }) // Enviamos los errores encontrados en un objeto JSON.
  }
}

export const validateResultFilter = (req: any, res: any, next: any): any => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  return res.status(422).json({ error: errors.array() })
}
