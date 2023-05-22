import express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Listar Agencias')
})

router.get('/:id')

router.post('/')

router.put('/:id')

export { router }
