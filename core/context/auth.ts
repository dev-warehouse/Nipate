import {createContext} from "react";
import {LoginFormData, RegisterFormData, UpdateDetailsFormData, UserModel} from "@core/models";
import {UseFormClearErrors, UseFormReset, UseFormSetError} from "react-hook-form";


/**
 * Interface for the functions that will interact with the user and authentication data
 *
 * Contains `login, logout, register, update` lifecycle functions
 */
interface AuthLifecycleActions {
    /**
     * This handle user authentication lifecycle
     * @param model
     * @param saveAuth
     */
    login: (model: LoginFormData, saveAuth: boolean, setError: UseFormSetError<any>, clearErrors: UseFormClearErrors<any>, reset: UseFormReset<any>) => void
    /**
     * This handles user logout lifecycle
     * @param model
     * @param saveAuth
     */
    logout: () => boolean
    /**
     * This handles user registration
     * @param model
     * @param saveAuth
     */
    register: (model: RegisterFormData, saveAuth: boolean) => boolean
    /**
     * This enables the user to update his/her details
     * @param model
     */
    update: (model: UpdateDetailsFormData) => boolean
}

/**
 * This is the structure of the data that the provider will provide, contains all the
 * auth lifecycle state data.
 */
interface AuthLifecycleData {
    currentUser?: UserModel
    authToken?: string
}

/**
 * This is a private context used to create the auth hooks and provider
 *
 * It has a type of `AuthLifecycleData & AuthLifecycleFunctions` to create the type
 * of data that the context and hook can accept. This prevents use of unresolved or
 * unspecified data within the hook.
 */
const authContext = createContext<AuthLifecycleData & AuthLifecycleActions>({} as AuthLifecycleActions & AuthLifecycleData)

export {authContext}
export type {AuthLifecycleData, AuthLifecycleActions}
