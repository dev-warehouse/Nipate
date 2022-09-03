enum UserRole {user, provider, admin}

enum Gender {male, female}

type Mobile = {
    countryCode: number
    phoneNumber: number
}

interface Location {
    name: string,
    longitude: number
    latitude: number
}

interface UserModel {
    userId: string
    firstName: string
    lastName: string
    mobileNumber: Mobile
    idNumber: number
    avatar: string
    roles: UserRole[]
    gender: Gender
    location: Location
}

export {UserRole, Gender}
export type {UserModel, Location, Mobile}