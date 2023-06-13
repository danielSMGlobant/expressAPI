import request from 'supertest'
import app from '../app'
import { tokenSing } from '../utils/handlerJWT'
import { testUserStorageAuthRegister } from './helper/helperData'
import { UserModel } from '../models/nosql/user.model'
import { StorageModel } from '../models/nosql/storage.model'
import path from 'path'

let JWT_TOKEN = ''
const filePath = path.resolve(__dirname, './dump/imgDemo.jpg')

beforeAll(async () => {
  await UserModel.deleteMany({})
  await StorageModel.deleteMany({})
  const user = await UserModel.create(testUserStorageAuthRegister)
  JWT_TOKEN = await tokenSing(user)
})

describe('@Storage', () => {
  describe('@when file is uploaded', () => {
    it('#should return 201 status code data file', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/storage')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
        .attach('myFile', filePath)
      // Assert
      expect(response.statusCode).toEqual(201)
    })

    it('#should return 401 status code if user is not authorized', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .post('/apiBS/storage')
        .attach('myFile', filePath)
      // Assert
      expect(response.statusCode).toEqual(401)
    })
  })

  describe('@when consult GET method', () => {
    it('#should return 200 with correct token', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get('/apiBS/storage')
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return 401 if no token provided', async () => {
      // Arrange
      // Act
      const response = await request(app).get('/apiBS/storage')
      // Assert
      expect(response.statusCode).toEqual(401)
    })
  })

  describe('@when consult GET/:id method', () => {
    let id = ''

    it('#should return id of any item', async () => {
      const response = await StorageModel.findOne()
      id = Object(response)._id
    })

    it('#should return 200 status code and the storage item with id provided', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get(`/apiBS/storage/${id}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return 401 status code if user isnt authenticated', async () => {
      // Arrange
      // Act
      const response = await request(app).get(`/apiBS/storage/${id}`)
      // Assert
      expect(response.statusCode).toEqual(401)
    })

    it('#should return 404 status code if uset not exist', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .get(`/apiBS/storage/${id}123`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(404)
    })
  })

  describe('@when consult DELETE/:id method', () => {
    let id = ''

    it('#should return id of any item', async () => {
      const response = await StorageModel.findOne()
      id = Object(response)._id
    })

    it('#should return 200 status code if deleted succesfull', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .delete(`/apiBS/storage/${id}`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(200)
    })

    it('#should return 401 status code if user isnt authenticated', async () => {
      // Arrange
      // Act
      const response = await request(app).delete(`/apiBS/storage/${id}`)
      // Assert
      expect(response.statusCode).toEqual(401)
    })

    it('#should return 404 status code if uset not exist', async () => {
      // Arrange
      // Act
      const response = await request(app)
        .delete(`/apiBS/storage/${id}123`)
        .set('Authorization', `Bearer ${JWT_TOKEN}`)
      // Assert
      expect(response.statusCode).toEqual(404)
    })
  })
})
