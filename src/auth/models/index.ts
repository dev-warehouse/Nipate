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
  mobile: UserDetails['mobileNumber']
  idNumber: UserDetails['idNumber']
  firstName: UserDetails['firstName']
  lastName: UserDetails['surName']
}

export interface RegisterUserFormData {
  gender: Gender
  location: County
  password: string
  confirmPassword: string
}
