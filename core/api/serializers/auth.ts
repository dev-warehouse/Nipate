import {LoginFormData} from "@core/models";

export interface LoginRequestData {
    MobileNumber: string
    password: string
}

export class AuthSerializer {
    static login = ({mobile: {code, number}, password}: LoginFormData): LoginRequestData => {
        return {
            MobileNumber: `${code}${number}`,
            password: password
        }
    }
}