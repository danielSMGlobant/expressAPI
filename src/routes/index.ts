import { readdirSync } from 'fs'
import express, { Router } from 'express'

const router: Router = express.Router()
const PATH_ROUTER = `${__dirname}`

const cleanFileName = (fileName: string): string => {
  const file = fileName.split('.').shift() as string
  return file
}

const loadRouter = (fileName: string): void => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}.route`)
      .then((module) => {
        router.use(`/${cleanName}`, module.router)
      })
      .catch((e) => {
        console.log('Error importando dinámicamente', e)
      })
  }
}

readdirSync(PATH_ROUTER).filter((fileName: string) => loadRouter(fileName))

export default router
