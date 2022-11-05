import { County } from '@api/models/location'
import { Gender, UserDetails } from '@api/models/user'

export type MobileNumber = {
  code: string
  phone: number
}

export interface LoginFormData {
  mobileNumber: MobileNumber
  password: string
  remember: boolean
}

export interface LoginResponseData {
  mobileNumber: string
  firstName: string
  lastName: string
  auth_token: string
}

export interface CreateUserFormData {
  mobileNumber: MobileNumber
  idNumber: UserDetails['idNumber']
  firstName: UserDetails['firstName']
  surName: UserDetails['surName']
}

export interface CreateUserResponseData {
  id: number
  mobileNumber: string
  idNumber: string
  firstName: string
  surName: string
  avatar: string
}

export interface RegisterUserFormData {
  gender: Gender
  location: County
  password: string
  confirmPassword: string
  avatar?: string
}

export interface RegisterUserPayload {
  userID: string | number
  locationID: number
  genderID: number
  password: string
}

export function registerUserSerializer(
  id: string | number,
  data: RegisterUserFormData
): RegisterUserPayload {
  return {
    userID: id,
    locationID: data.location.id,
    genderID: data.gender.id,
    password: data.password
  }
}
