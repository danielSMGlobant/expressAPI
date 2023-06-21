import express, { Request, Response } from 'express'
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
const NODE_ENV = process.env.NODE_ENV ?? 'development'

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

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Tu app esta lista por http://localhost:${PORT}`)
  })
}

// Invocar conexión con MongoDB
dbConnect()
  .then(() => {
    console.log('*** CONEXION EXITOSA CON BD ***')
  })
  .catch((err) => {
    console.log('*** ERROR CONEXION ***', err)
  })

export default app
