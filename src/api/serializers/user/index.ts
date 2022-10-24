import { User } from '@/api/models/user'

export interface UserResponse {
  id: number
  MobileNumber: string
  IDNumber: string
  FirstName: string
  SurName: string
}

export function UserDeserializer({
  id,
  MobileNumber,
  FirstName,
  SurName,
  IDNumber
}: UserResponse): User {
  return {
    userId: id,
    avatar: `${id}-${FirstName}`,
    idNumber: IDNumber,
    displayName: `${FirstName} ${SurName}`,
    mobileNumber: MobileNumber
  }
}
