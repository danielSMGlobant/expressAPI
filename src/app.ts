import express from 'express'
import * as diaryRouter from './routes/diaries.route'
import * as bmiRouter from './routes/bmi.route'
import router from './routes/index'

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

app.use('/api/diaries', diaryRouter.router) // Ejemplo API Diario de Vuelo
app.use('/bmi', bmiRouter.router) // Ejemplo de API BMI
app.use('/apiUX', router) // API UX DEMO

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
