import {createContext} from "react";
import {UserModel} from "@core/models";


/**
 * Interface for the functions that will interact with the user and authentication data
 *
 * Contains `login, logout, register, update` lifecycle functions
 */
interface AuthLifecycleActions {
    /**
     * This handle user authentication lifecycle, it sets the user through model and token strings
     * @param model
     * @param token
     */
    setUser: (model: UserModel) => void
    /**
     * Sets the auth Token
     * @param token
     */
    setToken: (token: string) => void
    /**
     * Persists Token
     * @param token
     */
    saveToken: (token: string) => void
    /**
     * This handles user logout lifecycle
     * @param model
     * @param saveAuth
     */
    removeUser: () => void
    /**
     * This enables the user to update user details
     * @param model
     */
    updateUser: (model: UserModel) => void
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
