import {UserModel} from ".";

export interface LoginFormData extends Pick<UserModel, "mobile"> {
    password: string
}

export interface RegisterFormData extends Omit<UserModel, "roles" | "avatar" | "userId"> {
    password: LoginFormData['password']
}

export interface UpdateDetailsFormData extends RegisterFormData {
}
