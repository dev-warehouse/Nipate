import {Component, createContext, useContext} from "react";
import {LoginDetails, UserModel} from "..";

/**
 * This is a private context used to create the auth hooks and provider
 *
 * It has a type of `AuthLifecycleData & AuthLifecycleFunctions` to create the type
 * of data that the context and hook can accept. This prevents use of unresolved or
 * unspecified data within the hook.
 */
const _context = createContext<AuthLifecycleData & AuthLifecycleActions>({} as AuthLifecycleActions & AuthLifecycleData)

/**
 * This is the hook that enables the use of the `AuthProvider`.
 *
 * It has inbuilt checks for whether the hook is used under the provider to prevent
 * undefined / unresolved data. It barrels the hook limit access to the context variable
 */
function useAuth(): AuthLifecycleData & AuthLifecycleActions {
    return useContext(_context)
}

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
    login: (model: LoginDetails, saveAuth: boolean) => boolean
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
    register: (model: UserModel, saveAuth: boolean) => boolean
    /**
     * This enables the user to update his/her details
     * @param model
     */
    update: (model: UserModel) => boolean
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
 * This provider is responsible to all things to do with user authentication
 *
 * It handles the implementation of all authentication lifecycle methods
 * by inheriting from `AuthLifecycleActions` and handles the state of all lifecycle data by
 * taking `AuthLifecycleData` as a state argument.
 */
class AuthProvider extends Component<any, AuthLifecycleData> implements AuthLifecycleActions {

    // TODO : Auth Provider Implementation
    state: AuthLifecycleData = {}

    /**
     * This is responsible to auto authenticating user when one has saved their login details
     */
    autoLogin() {
        console.log("Auto Login")
    }

    /**
     * This is where automatic lifecycle methods are done
     */
    componentDidMount() {
        this.autoLogin()
    }

    /**
     * Implementation of `login` lifecycle
     * @param model
     * @param saveAuth
     */
    login = (model: LoginDetails, saveAuth: boolean): boolean => {
        return false;
    };

    /**
     * Implementation of `logout` lifecycle
     * @param model
     * @param saveAuth
     */
    logout = (): boolean => {
        return false;
    };

    /**
     * Implementation of `register` lifecycle
     * @param model
     * @param saveAuth
     */
    register = (model: UserModel, saveAuth: boolean): boolean => {
        return false;
    };

    /**
     * Implementation of `update` lifecycle
     * @param model
     */
    update = (model: UserModel): boolean => {
        return false;
    };

    /**
     * This is where the provider is baked
     */
    render() {
        return <_context.Provider value={{
            currentUser: this.state.currentUser,
            authToken: this.state.authToken,
            login: this.login,
            logout: this.logout,
            register: this.register,
            update: this.update
        }} {...this.props}/>
    }
}

export {AuthProvider, useAuth}
export type {AuthLifecycleData, AuthLifecycleActions}