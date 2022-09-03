import {UserModel} from "@core/models/user";

interface LoginDetails {
    mobileNumber: UserModel['mobileNumber']
    password: string
}
export type {LoginDetails}