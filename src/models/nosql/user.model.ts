import { Schema, model } from 'mongoose'
import { IUser } from '../../interfaces/auth.interface'
import { RolUser } from '../../interfaces/enums'

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    mail: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false // Evitar traer este elemento en el find
    },
    rol: {
      type: String,
      enum: RolUser,
      default: RolUser.User
    }
  },
  {
    timestamps: true, // TODO: createAt, updateAt
    versionKey: false
  }
)

export const UserModel = model('users', UserSchema)
