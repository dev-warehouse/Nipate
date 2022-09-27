import {County, CreateUserFormData, LoginFormData, RegisterUserFormData, UserModel} from "@core/models";

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

export interface UserModelResponse {
    id: number
    MobileNumber: string
    IDNumber: string,
    FirstName: string
    SurName: string
    Location: County
    Gender: {
        id: number
        name: string
    }
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

    static userModel = (model: UserModel): UserModelResponse => {
        return {
            id: parseInt(model.userId),
            FirstName: model.firstName,
            SurName: model.lastName,
            Gender: {id: model.gender === 'male' ? 1 : 2, name: model.gender},
            IDNumber: model.idNumber.toString(),
            Location: model.location,
            MobileNumber: `${model.mobile.code}${model.mobile.number}`,
        }
    }
}

export class AuthDeserializer {
    
}