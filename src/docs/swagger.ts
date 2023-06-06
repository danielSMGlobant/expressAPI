import swaggerJsdoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API BS - Credit Card',
    version: '1.0.0'
  },
  servers: [{ url: 'http://localhost:3000/apiBS' }],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      registerUser: {
        type: 'object',
        required: ['name', 'age', 'mail', 'password'],
        properties: {
          name: {
            type: 'string'
          },
          age: {
            type: 'integer'
          },
          mail: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      loginUser: {
        type: 'object',
        required: ['mail', 'password'],
        properties: {
          mail: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      creditCard: {
        type: 'object',
        required: [
          'bin',
          'tioAux',
          'logoCode',
          'productName',
          'commercialName',
          'brandName',
          'status'
        ],
        properties: {
          bin: {
            type: 'string'
          },
          binStart: {
            type: 'string'
          },
          binEnd: {
            type: 'string'
          },
          logoCode: {
            type: 'string'
          },
          tioAux: {
            type: 'string'
          },
          productName: {
            type: 'string'
          },
          commercialName: {
            type: 'string'
          },
          brandName: {
            type: 'string'
          },
          creditCardLevel: {
            type: 'integer'
          },
          status: {
            type: 'boolean'
          },
          plasticChoice: {
            type: 'boolean'
          },
          nickname: {
            type: 'boolean'
          },
          minCreditLine: {
            type: 'integer'
          },
          maxCreditLine: {
            type: 'integer'
          },
          programBenefitCode: {
            type: 'string'
          },
          urlDesk: {
            type: 'string'
          },
          urlMobile: {
            type: 'string'
          },
          createdBy: {
            type: 'string'
          },
          createdDate: {
            type: 'string' // TODO: Cambiar a Date
          },
          lastModifiedBy: {
            type: 'string'
          },
          lastModifiedDate: {
            type: 'string' // TODO: Cambiar a Date
          }
        }
      },
      agencyGetRes: {
        type: 'object',
        required: [],
        properties: {
          _id: {
            type: 'string'
          },
          code: {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          status: {
            type: 'boolean'
          },
          region: {
            type: 'string'
          },
          province: {
            type: 'string'
          },
          district: {
            type: 'string'
          },
          geolocation: {
            type: 'string'
          },
          address: {
            type: 'string'
          },
          createdAt: {
            type: 'string'
          },
          updatedAt: {
            type: 'string'
          }
        }
      },
      agencyPostReq: {
        type: 'object',
        required: [
          'code',
          'name',
          'status',
          'region',
          'province',
          'district',
          'address'
        ],
        properties: {
          code: {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          status: {
            type: 'boolean'
          },
          region: {
            type: 'string'
          },
          province: {
            type: 'string'
          },
          district: {
            type: 'string'
          },
          geolocation: {
            type: 'string'
          },
          address: {
            type: 'string'
          }
        }
      },
      agencyPutReq: {
        type: 'object',
        required: [
          'name',
          'status',
          'region',
          'province',
          'district',
          'address'
        ],
        properties: {
          name: {
            type: 'string'
          },
          status: {
            type: 'boolean'
          },
          region: {
            type: 'string'
          },
          province: {
            type: 'string'
          },
          district: {
            type: 'string'
          },
          geolocation: {
            type: 'string'
          },
          address: {
            type: 'string'
          }
        }
      },
      storageGetRes: {
        type: 'object',
        required: [],
        properties: {
          _id: {
            type: 'string'
          },
          url: {
            type: 'string'
          },
          fileName: {
            type: 'string'
          },
          createdAt: {
            type: 'string'
          },
          updatedAt: {
            type: 'string'
          }
        }
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts']
}

export const openAPICongifiguration = swaggerJsdoc(options)
