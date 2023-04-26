import { readdirSync } from 'fs'
import express from 'express'

const router = express.Router()
const PATH_ROUTER = `${__dirname}`

const cleanFileName = (fileName: string): string => {
  const file = String(fileName.split('.').shift())
  return file
}

readdirSync(PATH_ROUTER).filter((fileName: string) => {
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
  return 'rutas'
})

export default router
