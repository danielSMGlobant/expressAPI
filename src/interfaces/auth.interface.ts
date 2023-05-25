import { RolUser } from './enums'

export interface IUser {
  name: string
  age: number
  mail: string
  password: string
  rol: RolUser
}
