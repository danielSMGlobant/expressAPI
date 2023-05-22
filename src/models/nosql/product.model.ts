import mongoose from 'mongoose'
import { IProductTc } from '../../interfaces/product.interface'
import { BrandName, ProgramBenefitCode } from '../../interfaces/enums'

const ProductSchema = new mongoose.Schema<IProductTc>(
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
    createdDate: {
      type: String // TODO: Cambiar a Date
    },
    lastModifiedBy: {
      type: String
    },
    lastModifiedDate: {
      type: String // TODO: Cambiar a Date
    }
  },
  {
    timestamps: true, // TODO: createAt, updateAt
    versionKey: false
  }
)

module.exports = mongoose.model('productsTc', ProductSchema)
