import { County } from '@/api/models/location'
import { Gender, User, UserDetails } from '@/api/models/user'

export interface UserResponse {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
  Avatar?: string
}

export function userDeserializer(userResponse: UserResponse): User {
  return {
    userId: userResponse.id,
    avatar:
      userResponse.Avatar ??
      `https://avatars.dicebear.com/api/adventurer/${userResponse.id}-${userResponse.FirstName}.svg`,
    idNumber: userResponse.IDNumber,
    displayName: `${userResponse.FirstName} ${userResponse.SurName}`,
    mobileNumber: userResponse.MobileNumber
  }
}

export interface UserDetailsResponse {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
  Location: County
  Avatar?: string
  Gender: Gender
}

export function userDetailsDeserilizer(
  userDetailsResponse: UserDetailsResponse
): UserDetails {
  return {
    userId: userDetailsResponse.id,
    mobileNumber: userDetailsResponse.MobileNumber,
    idNumber: userDetailsResponse.IDNumber,
    firstName: userDetailsResponse.FirstName,
    displayName: `${userDetailsResponse.FirstName} ${userDetailsResponse.SurName}`,
    surName: userDetailsResponse.SurName,
    gender: userDetailsResponse.Gender,
    location: userDetailsResponse.Location,
    avatar:
      userDetailsResponse.Avatar ??
      `https://avatars.dicebear.com/api/adventurer/${userDetailsResponse.id}-${userDetailsResponse.FirstName}.svg`
  }
}
