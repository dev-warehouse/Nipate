export interface UserDetails extends User {
  Location: UserLocation
  Gender: Gender
}

export interface User {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
}

export interface Gender {
  id: number
  name: string
}

export interface UserLocation {
  id: number
  Name: string
}
