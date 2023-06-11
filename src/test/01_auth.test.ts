import request from 'supertest'
import app from '../app'

const testAuhlogin = {
  mail: 'demo@gmail.com',
  password: 'demo1129'
}

const testAuthRegister = {
  name: 'Demo Méndez',
  age: 35,
  mail: 'demo3@gmail.com',
  password: 'demo11293'
}

const testAuthRegisterExist = {
  name: 'Juan Méndez',
  age: 40,
  mail: 'juan@gmail.com',
  password: 'juan1129'
}

describe('@Auth', () => {
  describe('@when logged ', () => {
    it('#should return status code 201 if is successfully ', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/auth/login')
        .send(testAuhlogin)

      // Assert
      expect(response.statusCode).toEqual(201)
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
        .send(testAuthRegisterExist)

      // Assert
      expect(response.statusCode).toEqual(404)
    })
  })
})
