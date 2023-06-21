import request from 'supertest'
import app from '../app'
import { UserModel } from '../models/nosql/user.model'
import { AgencyModel } from '../models/nosql/agency.model'
import {
  testAgency,
  testAuthRegister,
  testAuthRegisterQA
} from './helper/helperData'
import { tokenSing } from '../utils/handlerJWT'

let JWT_TOKEN = ''
let JWT_TOKEN_QA = ''

beforeAll(async () => {
  await UserModel.deleteMany({})
  await AgencyModel.deleteMany({})
  const user = await UserModel.create(testAuthRegister)
  const userQA = await UserModel.create(testAuthRegisterQA)
  JWT_TOKEN = await tokenSing(user)
  JWT_TOKEN_QA = await tokenSing(userQA)
})

describe('@Agency', () => {
  describe('@when call POST method', () => {
    it('#should return status code 201 if send correct required data ', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/agency')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
        .send(testAgency)
      // Assert
      expect(response.statusCode).toEqual(201)
    })
  })

  describe('@when call GET mothod', () => {
    it('#should return status code 200 with correct token ', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get('/apiBS/agency')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return status code 401 with if no token provided', async () => {
      // Arrange
      // Act
      const response = await request(app).get('/apiBS/agency')
      // Assert
      expect(response.statusCode).toEqual(401)
    })

    it('#should return status code 403 with correct token but the user QA does not have permissions', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get('/apiBS/agency')
        .set('Authorization', `Bearer ${JWT_TOKEN_QA}`)
      // Assert
      expect(response.statusCode).toEqual(403)
    })
  })

  describe('@when consult GET/:code method', () => {
    let code = ''

    it('#should return id on any item', async () => {
      const response = await AgencyModel.findOne()
      code = Object(response).code
    })

    it('#should return 200 status code and the agency item with code provided', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get(`/apiBS/agency/${code}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return 204 status code and if not find agency', async () => {
      // Arrange
      const codeFail = 12345
      // Act
      const response = await request(app)
        .get(`/apiBS/agency/${codeFail}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(204)
    })
  })

  describe('@when call PUT method', () => {
    let code = ''

    it('#should return id on any item', async () => {
      const response = await AgencyModel.findOne()
      code = Object(response).code
    })

    it('#should return states 200 if send correct required data and update correctly', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .put(`/apiBS/agency/${code}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
        .send(testAgency)
      // Assert
      expect(response.statusCode).toEqual(200)
    })
  })

  describe('@when call DELETE method', () => {
    let code = ''

    it('#should return id on any item', async () => {
      const response = await AgencyModel.findOne()
      code = Object(response).code
    })

    it('#should return states 200 if send correct required data and delete correctly', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .delete(`/apiBS/agency/${code}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })
  })
})
