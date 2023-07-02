import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../../config/mysql'
import { IUser } from '../../interfaces/auth.interface'

interface UserInstance extends Model<IUser>, IUser {}

export const User = sequelize.define<UserInstance>(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.ENUM('user', 'admin')
    }
  },
  {
    timestamps: true
  }
)
