// import { Schema, Types, model, Model } from 'mongoose'
import { Schema, model } from 'mongoose'
import { IAgency } from '../../interfaces/agency.interface'

const AgencySchema = new Schema<IAgency>(
  {
    code: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    },
    year: {
      type: Number
    },
    address: {
      type: String,
      required: true
    },
    ubigeo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true, // TODO: createAt, updateAt
    versionKey: false
  }
)

// export const AgencyModel = model('agency', AgencySchema)
export const AgencyModel = model('agencies', AgencySchema)
