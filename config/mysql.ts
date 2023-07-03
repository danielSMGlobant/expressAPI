import { Sequelize } from 'sequelize'

const database = process.env.MYSQL_DATABASE as string
const username = process.env.MYSQL_USER as string
const password = process.env.MYSQL_PASSWORD as string
const host = process.env.MYSQL_HOST

export const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mysql'
})

export const dbConnectMysql = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    console.log('MYSQL Conexión correcta')
  } catch (error) {
    console.log('MYSQL Error de conexion', error)
  }
}

sequelize
  .sync({ force: false }) // Pasa { force: true } si deseas eliminar y recrear la tabla en cada sincronización
  .then(() => {
    console.log('Modelo sincronizado con la base de datos')
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo:', error)
  })
