import express, { Request, Response } from 'express'
// import * as diaryRouter from './routes/diaries.route'
// import * as bmiRouter from './routes/bmi.route'
import router from './routes/index'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from '../config/mongo'
import morganBody from 'morgan-body'
import { loggerStream } from './utils/handlerLogger'
import swaggerUI from 'swagger-ui-express'
import { openAPICongifiguration } from './docs/swagger'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())
app.use(express.static('src/storage'))

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: (_req: Request, res: Response) => {
    return res.statusCode < 400
  }
})

app.use(
  '/documentation',
  swaggerUI.serve,
  swaggerUI.setup(openAPICongifiguration)
)

app.use('/apiBS', router) // API BS DEMO

// GET demo para ver que funcione
app.get('/', (_req, res) => {
  res.send('Hello Full Stack!')
})

// app.use('/api/diaries', diaryRouter.router) // Ejemplo API Diario de Vuelo
// app.use('/bmi', bmiRouter.router) // Ejemplo de API BMI

app.listen(PORT, () => {
  console.log(`Tu app esta lista por http://localhost:${PORT}`)
})

// Invocar conexión con MongoDB
dbConnect()
  .then(() => {
    console.log('*** CONEXION EXITOSA CON BD ***')
  })
  .catch((err) => {
    console.log('*** ERROR CONEXION ***', err)
  })
