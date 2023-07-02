import { AgencyModel as agencyModelNoSQL } from './nosql/agency.model'
import { CreditCardModel as creditCardModelNoSQL } from './nosql/creditCard.model'
import { StorageModel as storageModelNoSQL } from './nosql/storage.model'
import { UserModel as userModelNoSQL } from './nosql/user.model'

import { Agency as agencyModelMySQL } from './mysql/agency.model'
import { CreditCard as creditCardModelMySQL } from './mysql/creditCard.model'
import { Storage as storageModelMySQL } from './mysql/storage.model'
import { User as userModelMySQL } from './mysql/user.model'

const ENGINE_DB = process.env.ENGINE_DB

let agencyModel, creditCardModel, storageModel, userModel

if (ENGINE_DB === 'nosql') {
  agencyModel = agencyModelNoSQL
  creditCardModel = creditCardModelNoSQL
  storageModel = storageModelNoSQL
  userModel = userModelNoSQL
} else {
  agencyModel = agencyModelMySQL
  creditCardModel = creditCardModelMySQL
  storageModel = storageModelMySQL
  userModel = userModelMySQL
}

export const models = {
  agencyModel,
  creditCardModel,
  storageModel,
  userModel
}
