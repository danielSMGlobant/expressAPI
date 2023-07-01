import { DataTypes } from 'sequelize'
import { sequelize } from '../../../config/mysql'

export const user = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.NUMBER
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    roles: {
      type: DataTypes.ENUM('user', 'admin')
    }
  },
  {
    timestamps: true
  }
)
