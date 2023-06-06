/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import {
  deleteAgencyItem,
  getAgencyItem,
  getAgencyItems,
  postAgencyItem,
  putAgencyItem
} from '../controllers/agency.controller'
import {
  validatorCodeAgency,
  validatorCreateAgency,
  validatorUpdateAgency
} from '../validators/agency.validator'
import { authMiddleware } from '../middlewares/auth.middleware'
import { checkRol } from '../middlewares/rol.middleware'
const router = express.Router()

/**
 * Route get Agencies
 * @openapi
 * /agency:
 *      get:
 *          tags:
 *              - agency
 *          sumary: "Listar Agencias"
 *          description: "Esta ruta es para listar agencias"
 *          security:
 *            - bearerAuth: []
 *          responses:
 *              '200':
 *                  description: Se obtiene la lista de Agencias de manera correcta
 *                  content:
 *                    application/json:
 *                      schema:
 *                        type: array
 *                        items:
 *                          $ref: "#/components/schemas/agencyGetRes"
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error al obtener la información
 *              '500':
 *                  description: Error interno del servidor
 */
router.get('/', authMiddleware, checkRol(['User']), getAgencyItems)

/**
 * Route get Agency
 * @openapi
 * /agency/{code}:
 *      get:
 *          tags:
 *              - agency
 *          sumary: "Detalle de una Agencia"
 *          description: "Esta ruta es para ver el detalle de una agencias"
 *          security:
 *            - bearerAuth: []
 *          parameters:
 *            - name: code
 *              in: path
 *              decription: "Código de agencia a retornar"
 *              required: true
 *              schema:
 *                type: string
 *          responses:
 *              '200':
 *                  description: Se obtiene la lista de Agencias de manera correcta
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/agencyGetRes"
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error al obtener la información
 *              '500':
 *                  description: Error interno del servidor
 */
router.get(
  '/:code',
  authMiddleware,
  checkRol(['User']),
  validatorCodeAgency,
  getAgencyItem
)

/**
 * Route post Agency
 * @openapi
 * /agency:
 *      post:
 *          tags:
 *              - agency
 *          sumary: "Registro de Agencia"
 *          description: "Esta ruta es para registrar una nueva Agencia"
 *          security:
 *            - bearerAuth: []
 *          requestBody:
 *              content:
 *                application/json:
 *                  schema:
 *                          $ref: "#/components/schemas/agencyPostReq"
 *          responses:
 *              '201':
 *                  description: Retorna el objeto insertado en la coleccion.
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/agencyGetRes"
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error de registro
 *              '500':
 *                  description: Error interno del servidor
 */
router.post(
  '/',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCreateAgency,
  postAgencyItem
)

/**
 * Route put Agency
 * @openapi
 * /agency/{code}:
 *      put:
 *          tags:
 *              - agency
 *          sumary: "Actualización de Agencia"
 *          description: "Esta ruta es para actualizar una nueva Agencia"
 *          security:
 *            - bearerAuth: []
 *          parameters:
 *            - name: code
 *              in: path
 *              descriotion: "Código de agencia"
 *              required: true
 *              schema:
 *                type: string
 *          requestBody:
 *              content:
 *                application/json:
 *                  schema:
 *                          $ref: "#/components/schemas/agencyPutReq"
 *          responses:
 *              '200':
 *                  description: Retorna el objeto actualizado en la coleccion.
 *                  content:
 *                    application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/agencyGetRes"
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error de registro
 *              '500':
 *                  description: Error interno del servidor
 */
router.put(
  '/:code',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCodeAgency,
  validatorUpdateAgency,
  putAgencyItem
)

/**
 * Route delete Agency
 * @openapi
 * /agency/{code}:
 *      delete:
 *          tags:
 *              - agency
 *          sumary: "Eliminar  una Agencia"
 *          description: "Esta ruta es para eliminar una agencias"
 *          security:
 *            - bearerAuth: []
 *          parameters:
 *            - name: code
 *              in: path
 *              decription: "Código de agencia a eliminar"
 *              required: true
 *              schema:
 *                type: string
 *          responses:
 *              '200':
 *                  description: Dato eliminado correctamente.
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: No tiene sesión valida
 *              '404':
 *                  description: Error al obtener la información
 *              '500':
 *                  description: Error interno del servidor
 */
router.delete(
  '/:code',
  authMiddleware,
  checkRol(['User', 'Admin']),
  validatorCodeAgency,
  deleteAgencyItem
)

export { router }
