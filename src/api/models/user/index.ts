import { County } from '../location'

export interface UserDetails extends User {
  location: County
  gender: Gender
  firstName: string
  surName: string
}

export interface User {
  userId: number
  mobileNumber: string
  displayName: string
  idNumber: number
  avatar: string
}

export interface Gender {
  id: number
  name: string
}
