/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { validatorLogin, validatorRegister } from '../validators/auth.validator'
import { loginUser, registerUser } from '../controllers/auth.controller'

const router = express.Router()

router.post('/login', validatorLogin, loginUser)

router.post('/register', validatorRegister, registerUser)

export { router }
