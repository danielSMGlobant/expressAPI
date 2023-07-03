import { IAgency } from '../interfaces/agency.interface'
import { Agency } from '../models/mysql/agency.model'

export const getAgencies = async (): Promise<any> => {
  const response = await Agency.findAll()
  return response
}

export const getAgency = async (codeAgency: string): Promise<any> => {
  const QUERY = { where: { code: codeAgency } }
  const response = await Agency.findOne(QUERY)
  return response
}

export const insertAgency = async (data: IAgency): Promise<any> => {
  const response = await Agency.create(data)
  return response
}

export const updateAgency = async (
  codeAgency: string,
  data: IAgency
): Promise<any> => {
  const response = await Agency.update(data, {
    where: {
      code: codeAgency
    }
  })
  return response
}

export const deleteAgency = async (codeAgency: string): Promise<any> => {
  const response = await Agency.destroy({ where: { code: codeAgency } })
  return response
}
