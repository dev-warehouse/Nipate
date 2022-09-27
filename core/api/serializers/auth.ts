import {CreateUserFormData, LoginFormData, RegisterUserFormData} from "@core/models";

export interface LoginRequestData {
    MobileNumber: string
    password: string
}

export interface LoginResponseData {
    MobileNumber: string,
    FirstName: string,
    Auth_token: string
}

export interface CreateUserPostData {
    MobileNumber: string
    IDNumber: number
    FirstName: string
    SurName: string
}

export interface CreateUserResponseData {
    id: number
    MobileNumber: string,
    IDNumber: string,
    FirstName: string
}

export interface RegisterUserPostData {
    UserID: number
    LocationID: number
    GenderID: number
    password: string
}


export class AuthSerializer {
    static login = ({mobile: {code, number}, password}: Omit<LoginFormData, 'remember'>): LoginRequestData => {
        return {
            MobileNumber: `${code}${number}`,
            password: password
        }
    }
    static createUser = ({
                             mobile: {code, number},
                             idNumber,
                             firstName,
                             lastName
                         }: CreateUserFormData): CreateUserPostData => {
        return {
            MobileNumber: `${code}${number}`,
            IDNumber: idNumber,
            FirstName: firstName,
            SurName: lastName
        }
    }

    static registerUser = ({
                               createdID,
                               payload: {
                                   location,
                                   gender,
                                   password
                               }
                           }: { createdID: number, payload: RegisterUserFormData }): RegisterUserPostData => {
        return {
            UserID: createdID,
            LocationID: location.id,
            GenderID: gender === 'male' ? 1 : 2,
            password: password
        }
    }
}