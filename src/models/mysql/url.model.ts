import { DataTypes } from 'sequelize'
import { sequelize } from '../../../config/mysql'
export const Storage = sequelize.define(
  'storage',
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
)
