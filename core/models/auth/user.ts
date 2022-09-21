export enum UserRole {user, provider, admin}

export enum Gender {male, female}

export type MobileNumber = {
    code?: string;
    number?: string;
}

export interface Location {
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
    avatar?: string
    roles: UserRole[]
    gender: Gender
    location?: Location
}