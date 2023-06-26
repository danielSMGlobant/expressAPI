import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    // Indicar la ruta donde se guardará el archivo
    // const pathStorage = `${__dirname}/../storage`
    const pathStorage = path.resolve(__dirname, '../storage') // Es la mejor forma de concatenar ruta de files
    console.log('PATH', pathStorage)
    cb(null, pathStorage)
  },
  filename: (_req, file, cb) => {
    // Crear el nombre del archivo como se guardará
    const ext = file.originalname.split('.').pop() as string
    const fileName = `file-${Date.now()}.${ext}`
    cb(null, fileName)
  }
})

export const uploadMiddleware = multer({ storage })
