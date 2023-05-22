import { IAgency } from '../interfaces/agency.interface'
import { AgencyModel } from '../models/nosql/agency.model'

export const getAgencies = async (): Promise<any> => {
  const response = await AgencyModel.find({})
  return response
}

export const getAgency = async (codeAgency: string): Promise<any> => {
  const response = await AgencyModel.findOne({ code: codeAgency })
  return response
}

export const insertAgency = async (data: IAgency): Promise<any> => {
  const response = await AgencyModel.create(data)
  return response
}

export const updateAgency = async (
  codeAgency: string,
  data: IAgency
): Promise<any> => {
  const response = await AgencyModel.findOneAndUpdate(
    { code: codeAgency },
    data,
    { new: true }
  )
  return response
}

export const deleteAgency = async (codeAgency: string): Promise<any> => {
  const response = await AgencyModel.deleteOne({ code: codeAgency })
  return response
}
