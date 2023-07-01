import { DataTypes } from 'sequelize'
import { sequelize } from '../../../config/mysql'

export const Agency = sequelize.define(
  'agency',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    region: {
      type: DataTypes.STRING
    },
    province: {
      type: DataTypes.STRING
    },
    distric: {
      type: DataTypes.STRING
    },
    geolocation: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)
