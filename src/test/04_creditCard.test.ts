import request from 'supertest'
import app from '../app'
import { UserModel } from '../models/nosql/user.model'
import { CreditCardModel } from '../models/nosql/creditCard.model'
import { testAuthRegister, testCreditCard } from './helper/helperData'
import { tokenSing } from '../utils/handlerJWT'

let JWT_TOKEN = ''

beforeAll(async () => {
  await UserModel.deleteMany({})
  await CreditCardModel.deleteMany({})
  const user = await UserModel.create(testAuthRegister)
  JWT_TOKEN = await tokenSing(user)
})

describe('@CreditCard', () => {
  describe('@when call POST method', () => {
    it('#should return status code 201 if send correct required data', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/creditCard')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
        .send(testCreditCard)
      // Assert
      expect(response.statusCode).toEqual(201)
    })
  })

  describe('@when call GET method', () => {
    it('#should return status code 200 with correct token', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get('/apiBS/creditCard')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return status code 401 with if no token provided', async () => {
      // Arrange
      // Act
      const response = await request(app).get('/apiBS/creditCard')
      // Assert
      expect(response.statusCode).toEqual(401)
    })
  })

  describe('@when call GET/:code method', () => {
    let tioAux = ''
    it('#should return id on any item', async () => {
      const response = await CreditCardModel.findOne()
      tioAux = Object(response).tioAux
    })

    it('#should return 200 status code and the credit card item with tioAux provided', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get(`/apiBS/creditCard/${tioAux}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return 204 status code and the credit card item with tioAux provided', async () => {
      // Arrange
      const tioAuxFail = 'VISVIS'
      // Act
      const response = await request(app)
        .get(`/apiBS/creditCard/${tioAuxFail}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(204)
    })
  })

  describe('@when call PUT method', () => {
    let tioAux = ''
    it('#should return id on any item', async () => {
      const response = await CreditCardModel.findOne()
      tioAux = Object(response).tioAux
    })

    it('#should return status code 200 if send correct required data and update correctly', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .put(`/apiBS/creditCard/${tioAux}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
        .send(testCreditCard)
      // Assert
      expect(response.statusCode).toEqual(200)
    })
  })

  describe('@when call DELETE method', () => {
    let tioAux = ''
    it('#should return id on any item', async () => {
      const response = await CreditCardModel.findOne()
      tioAux = Object(response).tioAux
    })

    it('#should return status code 200 if send correct required data and delete correctly', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .delete(`/apiBS/creditCard/${tioAux}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })
  })
})
