import {Gender, UserModel} from ".";
import {County} from "@core/models";

export interface LoginFormData extends Pick<UserModel, "mobile"> {
    password: string
    remember: boolean
}

export interface CreateUserFormData {
    mobile: UserModel['mobile']
    idNumber: UserModel['idNumber']
    firstName: UserModel['firstName']
    lastName: UserModel['lastName']
}

export interface RegisterUserFormData {
    gender: Gender
    location: County,
    password: string
    confirmPassword: string
}