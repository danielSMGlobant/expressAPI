import { DataTypes } from 'sequelize'
import { sequelize } from '../../../config/mysql'

export const CreditCard = sequelize.define(
  'creditCard',
  {
    bin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    binStart: {
      type: DataTypes.STRING
    },
    binEnd: {
      type: DataTypes.STRING
    },
    logoCode: {
      type: DataTypes.STRING
    },
    tioAux: {
      type: DataTypes.STRING
    },
    productName: {
      type: DataTypes.STRING
    },
    commercialName: {
      type: DataTypes.STRING
    },
    brandName: {
      type: DataTypes.STRING
    },
    creditCardLevel: {
      type: DataTypes.NUMBER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    plasticChoice: {
      type: DataTypes.BOOLEAN
    },
    nickname: {
      type: DataTypes.BOOLEAN
    },
    minCreditLine: {
      type: DataTypes.NUMBER
    },
    maxCreditLine: {
      type: DataTypes.NUMBER
    },
    programBenefitCode: {
      type: DataTypes.ENUM('LATAMPASS', 'null')
    },
    urlDesk: {
      type: DataTypes.STRING
    },
    urlMobile: {
      type: DataTypes.STRING
    },
    createdBy: {
      type: DataTypes.STRING
    },
    createdDate: {
      type: DataTypes.STRING // TODO: Cambiar a Date
    },
    lastModifiedBy: {
      type: DataTypes.STRING
    },
    lastModifiedDate: {
      type: DataTypes.STRING // TODO: Cambiar a Date
    }
  },
  {
    timestamps: true
  }
)
