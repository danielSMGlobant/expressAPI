import express from 'express'
import diaryRouter from './routes/diaries'
import bmiRouter from './routes/bmi'
import productRouter from './routes/product'

const app = express()
const PORT = 3000

app.use(express.json())

// GET demo para ver que funcione
app.get('/', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/ping', (_req, res) => {
  // si no usas uno de los parametros puedes ponerle un guion abajo para que no alerte
  console.log('some pigned here!!')
  res.send('pong - pong')
})

app.use('/api/diaries', diaryRouter) // Ejemplo API Diario de Vuelo
app.use('/bmi', bmiRouter)
app.use('/bs-credit-card-product', productRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
