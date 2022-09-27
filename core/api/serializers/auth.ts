import {LoginFormData} from "@core/models";

export interface LoginRequestData {
    MobileNumber: string
    password: string
}

export interface LoginResponseData {
    MobileNumber: string,
    FirstName: string,
    Auth_token: string
}

export class AuthSerializer {
    static login = ({mobile: {code, number}, password}: Omit<LoginFormData, 'remember'>): LoginRequestData => {
        return {
            MobileNumber: `${code}${number}`,
            password: password
        }
    }
}