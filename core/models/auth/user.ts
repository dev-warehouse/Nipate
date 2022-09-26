export type UserRole = 'user' | 'provider' | 'admin'

export type Gender = 'male' | 'female'

export type MobileNumber = {
    code?: string;
    number?: string;
}

export interface GeoLocation {
    label: string,
    longitude: number
    latitude: number
}

export interface UserModel {
    userId: string
    firstName: string
    lastName: string
    mobile: MobileNumber
    idNumber: number
    roles: UserRole[]
    gender: Gender
    location?: GeoLocation
}