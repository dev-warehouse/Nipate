import { County } from '@core/models/location'

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
  idNumber: string
  avatar: string
}

export enum Gender {
  male,
  female
}
