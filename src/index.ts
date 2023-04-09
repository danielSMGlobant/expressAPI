import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (_req, res) => {
  // si no usas uno de los parametros puedes ponerle un guion abajo para que no alerte
  console.log('some pigned here!!')
  res.send('pong - pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
