import { Imc, NewImc } from '../types'

const valorIMCForMen = (imc: number): string => {
  let resultado: string = ''
  if (imc < 18.5) {
    resultado = 'tienes un peso bajo'
  } else if (imc >= 18.5 && imc < 25) {
    resultado = 'tienes un peso saludable'
  } else if (imc >= 25 && imc < 30) {
    resultado = 'tienes sobrepeso'
  } else if (imc >= 30 && imc < 35) {
    resultado = 'tienes obesidad de grado I'
  } else if (imc >= 35 && imc < 40) {
    resultado = 'tienes obesidad de grado II'
  } else if (imc >= 40) {
    resultado = 'tienes obesidad de grado III o mórbida'
  }

  return resultado
}

const calculateIMC = (data: NewImc): string => {
  const heightMetre: number = data.height / 100
  const IMC = (data.weight / Math.pow(heightMetre, 2)).toFixed(2)
  const valorIMC = valorIMCForMen(Number(IMC))
  const result: string = `Tu IMC (indice de mása corporal) es ${IMC}. Por lo tanto ${valorIMC} `
  return result
}

// export const getIMC = (heightReq: number, weightReq: number): Imc => {
export const getIMC = (data: NewImc): Imc => {
  // Código para calcular el IMC

  const imcData: Imc = {
    weight: data.weight,
    height: data.height,
    bmi: calculateIMC(data)
  }

  return imcData
}
