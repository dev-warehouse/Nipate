import {Gender, Location, UserModel} from ".";

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
    location?: Location
    password: string
    confirmPassword: string
}