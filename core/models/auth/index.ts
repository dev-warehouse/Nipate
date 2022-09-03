import {UserModel} from "@core/models/auth/user";

interface LoginDetails {
    mobileNumber: UserModel['mobileNumber']
    password: string
}
export type {LoginDetails}
export * from './user'