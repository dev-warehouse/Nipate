enum UserRole {user, provider, admin}

enum Gender {male, female}

interface Location {
    name: string,
    longitude: number
    latitude: number
}

interface UserModel {
    userId: string
    firstName: string
    lastName: string
    mobileNumber: number
    idNumber: number
    avatar: string
    roles: UserRole[]
    gender: Gender
    location: Location
}

export type {UserModel, Location, Gender, UserRole}