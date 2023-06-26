import { connect } from 'mongoose'

const NODE_ENV = process.env.NODE_ENV

const dbConnect = async (): Promise<void> => {
  const DB_URI: string =
    NODE_ENV === 'test'
      ? (process.env.DB_URI_TEST as string)
      : (process.env.DB_URI as string)
  await connect(DB_URI, {
    autoIndex: true
  })
}

export default dbConnect
