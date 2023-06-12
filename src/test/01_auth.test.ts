import request from 'supertest'
import app from '../app'
import { UserModel } from '../models/nosql/user.model'

const testAuhlogin = {
  mail: 'demo@gmail.com',
  password: 'demo1129'
}

const testAuthRegister = {
  name: 'Juan Méndez',
  age: 40,
  mail: 'juan@gmail.com',
  password: 'juan1129'
}

// const testAuthRegisterExist = {
//   name: 'Juan Méndez',
//   age: 40,
//   mail: 'juan@gmail.com',
//   password: 'juan1129'
// }

beforeAll(async () => {
  await UserModel.deleteMany()
})

describe('@Auth', () => {
  describe('@when logged ', () => {
    it('#should return status code 404 if is fail ', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/auth/login')
        .send(testAuhlogin)

      // Assert
      expect(response.statusCode).toEqual(404)
    })
  })

  describe('@when register', () => {
    it('#should return 201 and data user in response if user is new', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/auth/register')
        .send(testAuthRegister)

      // Assert
      expect(response.statusCode).toEqual(201)
      expect(response.body).toHaveProperty('user')
    })

    it('#should return 404 if the user exist', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/auth/register')
        .send(testAuthRegister)

      // Assert
      expect(response.statusCode).toEqual(404)
    })
  })
})
