import express from 'express'
import * as bmiServices from '../services/bmi.service'
import { NewImc } from '../types'
import { toNewImc, validateQueryString } from '../utils/utils'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const queryStringParams = validateQueryString(req.query) // aqui valido que vaya query String
    // const data: NewImc = toNewImc(req.query) // aqui valido la data entrante
    const data: NewImc = toNewImc(queryStringParams) // aqui valido la data entrante
    const bmi = bmiServices.getIMC(data)
    res.send(bmi)
  } catch (e: any) {
    res.status(400).send({ error: e.message })
  }
})

export { router }
