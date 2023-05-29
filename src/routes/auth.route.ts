/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { validatorLogin, validatorRegister } from '../validators/auth.validator'
import { loginUser, registerUser } from '../controllers/auth.controller'

const router = express.Router()

/**
 * Route login user
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          sumary: "Login Usuario"
 *          description: "Esta ruta es para logear un usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/loginUser"
 *          responses:
 *              '201':
 *                  description: El usuario se logeo de manera correcta
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '401':
 *                  description: Error de autenticación, por contraseña invalida
 *              '403':
 *                  description: Error por validación
 *              '404':
 *                  description: Error de autenticación, por usuario no encontrado
 */
router.post('/login', validatorLogin, loginUser)

/**
 * Route register user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          sumary: "Registro de Usuario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/registerUser"
 *          responses:
 *              '201':
 *                  description: El usuario se registro de manera correcta
 *              '400':
 *                  description: Error por enviar parametros incorrectos
 *              '404':
 *                  description: Error de registro
 */
router.post('/register', validatorRegister, registerUser)

export { router }
