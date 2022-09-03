import {UserModel} from "@core/models/auth/user";

interface LoginFormData {
    mobileNumber: UserModel['mobileNumber']
    password: string
}

interface RegisterFormData {
    firstName: string
    lastName: string;
    idNumber: number;
    mobileNumber: UserModel['mobileNumber']
    gender: UserModel['gender'];
    location: UserModel['location'];
    password: LoginFormData['password']
}

interface UpdateDetailsFormData {

}

export type {LoginFormData, RegisterFormData, UpdateDetailsFormData}
export * from './user'