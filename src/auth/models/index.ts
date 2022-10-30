import { County } from '@api/models/location'
import { Gender, UserDetails } from '@api/models/user'

export interface LoginFormData extends Pick<UserDetails, 'mobileNumber'> {
  password: string
  remember: boolean
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
