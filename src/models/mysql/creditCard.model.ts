import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../../config/mysql'
import { ICreditCard } from '../../interfaces/creditCard.interface'

interface CreditCardInstance extends Model<ICreditCard>, ICreditCard {}

export const CreditCard = sequelize.define<CreditCardInstance>(
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
      type: DataTypes.STRING,
      allowNull: false
    },
    tioAux: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commercialName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandName: {
      type: DataTypes.STRING
    },
    creditCardLevel: {
      type: DataTypes.NUMBER
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    lastModifiedBy: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)
