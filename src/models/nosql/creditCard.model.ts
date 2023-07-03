import mongoose from 'mongoose'
import { ICreditCard } from '../../interfaces/creditCard.interface'
import { BrandName, ProgramBenefitCode } from '../../interfaces/enums'

const CreditCardSchema = new mongoose.Schema<ICreditCard>(
  {
    bin: {
      type: String,
      unique: true
    },
    binStart: {
      type: String
    },
    binEnd: {
      type: String
    },
    logoCode: {
      type: String,
      unique: true
    },
    tioAux: {
      type: String,
      unique: true
    },
    productName: {
      type: String
    },
    commercialName: {
      type: String
    },
    brandName: {
      type: String,
      enum: BrandName
    },
    creditCardLevel: {
      type: Number
    },
    status: {
      type: Boolean
    },
    plasticChoice: {
      type: Boolean
    },
    nickname: {
      type: Boolean
    },
    minCreditLine: {
      type: Number
    },
    maxCreditLine: {
      type: Number
    },
    programBenefitCode: {
      type: String,
      enum: ProgramBenefitCode
    },
    urlDesk: {
      type: String
    },
    urlMobile: {
      type: String
    },
    createdBy: {
      type: String
    },
    lastModifiedBy: {
      type: String
    }
  },
  {
    timestamps: true, // TODO: createAt, updateAt
    versionKey: false
  }
)

export const CreditCardModel = mongoose.model('creditcards', CreditCardSchema)
