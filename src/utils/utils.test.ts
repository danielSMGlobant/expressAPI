import * as util from './utils'

describe('@Utils', () => {
  describe('When toNewImc is called', () => {
    it('#should return new parsed data if the data is sent correctly ', () => {
      // Arrange
      const valor = { weight: 123, height: 123 }
      // Act
      const response = util.toNewImc(valor)
      // Assert
      expect(response).toEqual(valor)
    })

    it('#should return new parsed data if the data is not sent correctly', () => {
      // Arrange
      const valorEnviado = { weight: '123', height: '190' }
      const valorEsperado = { weight: 123, height: 190 }
      // Act
      const response = util.toNewImc(valorEnviado)
      // Assert
      expect(response).toEqual(valorEsperado)
    })

    it('#should return error if the data is not sent correctly ', () => {
      // Arrange
      const valorEnviado = { height: 190 }
      // Act
      // const response = util.toNewImc(valorEnviado)
      // Assert
      expect(() => util.toNewImc(valorEnviado)).toThrow()
    })

    it('#should return error if the data is not sent correctly ', () => {
      // Arrange
      const valorEnviado = { weight: 123 }
      // Act
      // const response = util.toNewImc(valorEnviado)
      // Assert
      expect(() => util.toNewImc(valorEnviado)).toThrow()
    })
  })

  describe('When validateQueryString is called', () => {
    it('#should return new parsed data if the data is sent correctly ', () => {
      // Arrange
      const queryParmeters = { weight: 123, height: 123 }
      // Act
      const response = util.validateQueryString(queryParmeters)
      // Assert
      expect(response).toEqual(queryParmeters)
    })

    it('#should return error if the data is not sent correctly ', () => {
      // Arrange
      const queryParmeters = {}
      // Act
      // const response = util.toNewImc(valorEnviado)
      // Assert
      expect(() => util.validateQueryString(queryParmeters)).toThrow()
    })
  })

  describe('When toNewDiaryEntry is called', () => {
    it('#should return new parsed data if the data is sent correctly ', () => {
      // Arrange
      const data = {
        comment: '123',
        date: '12',
        weather: 'windy',
        visibility: 'ok'
      }
      // Act
      const response = util.toNewDiaryEntry(data)
      // Assert
      expect(response).toEqual(data)
    })

    it('#should return error if the data is not sent correctly ', () => {
      // Arrange
      const queryParmeters = {}
      // Act
      // const response = util.toNewImc(valorEnviado)
      // Assert
      expect(() => util.validateQueryString(queryParmeters)).toThrow()
    })
  })
})
