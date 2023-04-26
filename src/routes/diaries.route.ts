import express from 'express'
import * as diaryServices from '../services/diaries.service'
import { NewDiaryEntry } from '../types'
import { toNewDiaryEntry } from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutComments())
  // console.log('Obteniendo datos')
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  // res.send(diary)
  // return diary != null ? res.send(diary) : res.sendStatus(404)
  return diary != null
    ? res.send(diary)
    : res.status(404).send({ message: 'El id no existe' })
})

router.post('/', (req, res) => {
  try {
    const data: NewDiaryEntry = toNewDiaryEntry(req.body)
    const newDiaryEntry = diaryServices.addDiary(data)
    res.json(newDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export { router }
