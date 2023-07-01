/* eslint-disable @typescript-eslint/no-floating-promises */
import express, { Request, Response } from 'express'
import router from './routes/index'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from '../config/mongo'
import morganBody from 'morgan-body'
import { loggerStream } from './utils/handlerLogger'
import swaggerUI from 'swagger-ui-express'
import { openAPICongifiguration } from './docs/swagger'
import { dbConnectMysql } from '../config/mysql'

const app = express()
const PORT = process.env.PORT ?? 3000
const NODE_ENV = process.env.NODE_ENV ?? 'development'
const ENGINE_DB = process.env.ENGINE_DB

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
ENGINE_DB === 'nosql' ? dbConnect() : dbConnectMysql()

export default app
