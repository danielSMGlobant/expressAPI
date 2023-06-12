import { connect } from 'mongoose'

const NODE_ENV = process.env.NODE_ENV

const dbConnect = async (): Promise<void> => {
  const DB_URI =
    NODE_ENV === 'test'
      ? String(process.env.DB_URI_TEST)
      : String(process.env.DB_URI)
  await connect(DB_URI, {
    autoIndex: true
  })
}

export default dbConnect
