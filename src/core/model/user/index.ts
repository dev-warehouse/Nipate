export interface UserDetails extends User {
  location: UserLocation
  gender: Gender
  idNumber: string
  firstName: string
  surName: string
}

export interface User {
  userId: number
  mobileNumber: string
  displayName: string
  avatar: string
}

export type Gender = 'male' | 'female'

export interface UserLocation {
  id: number
  Name: string
}
