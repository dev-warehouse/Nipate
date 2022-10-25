import { Gender, User, UserDetails } from '@/api/models/user'
import { countyDeserializer, CountyResponse } from '../location'

export interface UserResponse {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
  Avatar?: string
}

export function userDeserializer({
  id,
  MobileNumber,
  FirstName,
  SurName,
  IDNumber,
  Avatar
}: UserResponse): User {
  return {
    userId: id,
    avatar:
      Avatar ??
      `https://avatars.dicebear.com/api/adventurer/${id}-${FirstName}.svg`,
    idNumber: IDNumber,
    displayName: `${FirstName} ${SurName}`,
    mobileNumber: MobileNumber
  }
}

export interface UserDetailsResponse {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
  Location: CountyResponse
  Avatar?: string
  Gender: Gender
}

export function userDetailsDeserilizer({
  id,
  MobileNumber,
  IDNumber,
  FirstName,
  SurName,
  Location,
  Avatar,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Gender
}: UserDetailsResponse): UserDetails {
  return {
    userId: id,
    mobileNumber: MobileNumber,
    idNumber: IDNumber,
    firstName: FirstName,
    displayName: `${FirstName} ${SurName}`,
    surName: SurName,
    gender: Gender,
    location: countyDeserializer(Location),
    avatar:
      Avatar ??
      `https://avatars.dicebear.com/api/adventurer/${id}-${FirstName}.svg`
  }
}
