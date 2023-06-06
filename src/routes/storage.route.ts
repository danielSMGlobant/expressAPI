/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { uploadMiddleware } from '../utils/handlerStorage'
import {
  deleteStorageItem,
  getStorageItem,
  getStorageItems,
  postStorage
} from '../controllers/storage.controller'
import { validatorIdStorage } from '../validators/storage.validator'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = express.Router()

/**
 * Route get Storages
 * @openapi
 * /storage:
 *      get:
 *          tags:
 *              - storage
 *          sumary: "Listar Archivos"
 *          description: "Esta ruta es para listar archivos"
 *          security:
 *            - bearerAuth: []
 *          responses:
 *              '200':
 *                  description: Se obtiene la lista de Archivos de manera correcta
 *                  content:
 *                    application/json:
 *                      schema:
 *                        type: array
 *                        items:
 *                          $ref: "#/components/schemas/storageGetRes"
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error al obtener la información
 */
router.get('/', authMiddleware, getStorageItems)

/**
 * Route get Storage
 * @openapi
 * /storage/{id}:
 *      get:
 *          tags:
 *              - storage
 *          sumary: "Detalle de un Archivos"
 *          description: "Esta ruta es para ver el detalle de un archivo"
 *          security:
 *            - bearerAuth: []
 *          parameters:
 *            - name: id
 *              in: path
 *              description: ID de archivo a retornar
 *              required: true
 *              schema:
 *                type: string
 *          responses:
 *              '200':
 *                  description: Se obtiene el detalle de un Archivos de manera correcta
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/storageGetRes"
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error de obtener la información
 */
router.get('/:id', authMiddleware, validatorIdStorage, getStorageItem)

/**
 * Route post Storage
 * @openapi
 * /storage:
 *      post:
 *          tags:
 *              - storage
 *          sumary: "Registro de Storage"
 *          description: "Esta ruta es para registrar un nuevo Archivo"
 *          security:
 *            - bearerAuth: []
 *          requestBody:
 *              content:
 *                multipart/form-data:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      myFile:
 *                        type: string
 *                        format: binary
 *          responses:
 *              '201':
 *                  description: Retorna el objeto insertado en la coleccion.
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error de registro
 */
router.post('/', authMiddleware, uploadMiddleware.single('myFile'), postStorage)

/**
 * Route delete Storage
 * @openapi
 * /storage/{id}:
 *      delete:
 *          tags:
 *              - storage
 *          sumary: "Eliminar Archivo"
 *          description: "Esta ruta es para eliminar un archivo"
 *          security:
 *            - bearerAuth: []
 *          parameters:
 *            - name: id
 *              in: path
 *              description: ID de archivo
 *              required: true
 *              schema:
 *                type: string
 *          responses:
 *              '200':
 *                  description: Se obtiene el detalle de un Archivos de manera correcta
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/storageGet"
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error al eliminar el archivo
 */
router.delete('/:id', authMiddleware, validatorIdStorage, deleteStorageItem)

export { router }
