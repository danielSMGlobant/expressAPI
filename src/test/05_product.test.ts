import request from 'supertest'
import app from '../app'
import { testProduct } from './helper/helperData'

describe('@Product', () => {
  describe('@when call POST method', () => {
    it('#should return status code 201 if send correct required data', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/product')
        .send(testProduct)
      // Assert
      expect(response.statusCode).toEqual(201)
    })
  })

  describe('@when call GET method', () => {
    it('#should return status code 200 if status is 1', async () => {
      // Arrange
      const statusTest = 1
      // Act
      const response = await request(app)
        .get('/apiBS/product')
        .query({ status: statusTest })
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return status code 400 if status is invalid', async () => {
      // Arrange
      const statusTest = 4
      // Act
      const response = await request(app)
        .get('/apiBS/product')
        .query({ status: statusTest })
      // Assert
      expect(response.statusCode).toEqual(400)
    })
  })

  describe('@when call GET/:tioAux method', () => {
    it('#should return status code 200 if send tioAux correctly ', async () => {
      // Arrange
      const tioAux = 'TCTCTC'
      // Act
      const response = await request(app).get(`/apiBS/product/${tioAux}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return status code 204 if send tioAux correctly but it doues not exist ', async () => {
      // Arrange
      const tioAux = 'TCTCTD'
      // Act
      const response = await request(app).get(`/apiBS/product/${tioAux}`)
      // Assert
      expect(response.statusCode).toEqual(204)
    })
  })

  describe('@when call PUT method', () => {
    it('#should return status code 200 if send correct required data', async () => {
      // Arrange
      const tioAux = 'TCTCTC'
      // Act
      const response = await request(app)
        .put(`/apiBS/product/${tioAux}`)
        .send(testProduct)
      // Assert
      expect(response.statusCode).toEqual(200)
    })
  })
})
