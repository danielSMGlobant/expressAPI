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

  //   describe('@when call GET method', () => {
  //     it('#should return status code 200 with correct token', async () => {
  //       // Arrange
  //       // Act
  //       const response = await request(app).get('/apiBS/product')
  //       // Assert
  //       expect(response.statusCode).toEqual(200)
  //     })
  //   })

  //   describe('@when call PUT method', () => {
  //     it('#should return status code 201 if send correct required data', async () => {
  //       // Arrange
  //       const tioAux = 'TCTCTC'
  //       // Act
  //       const response = await request(app)
  //         .put(`/apiBS/product/${tioAux}`)
  //         .send(testProduct)
  //       // Assert
  //       expect(response.statusCode).toEqual(201)
  //     })
  //   })
})
