import { connect } from 'mongoose'

const dbConnect = async (): Promise<void> => {
  const DB_URI = String(process.env.DB_URI)
  await connect(DB_URI, {
    autoIndex: true
  })
}

export default dbConnect
