export interface AppUser {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
  Location: UserLocation
  Gender: Gender
}

export interface Gender {
  id: number
  name: string
}

export interface UserLocation {
  id: number
  Name: string
}
