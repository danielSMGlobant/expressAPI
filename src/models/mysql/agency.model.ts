import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../../config/mysql'
import { IAgency } from '../../interfaces/agency.interface'

interface AgencyInstance extends Model<IAgency>, IAgency {}

export const Agency = sequelize.define<AgencyInstance>(
  'agencies',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    geolocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
)
