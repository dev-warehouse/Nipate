import {Component} from "react";
import {LoginFormData, RegisterFormData, UpdateDetailsFormData} from "@core/models";
import {authContext, AuthLifecycleActions, AuthLifecycleData} from "@core/context";
import {UseFormClearErrors, UseFormReset, UseFormSetError} from "react-hook-form";

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
     * @param setError
     * @param clearErrors
     * @param reset
     */
    login = (model: LoginFormData, saveAuth: boolean, setError: UseFormSetError<any>, clearErrors: UseFormClearErrors<any>, reset: UseFormReset<any>) => {
    };

    /**
     * Implementation of `logout` lifecycle
     */
    logout = (): boolean => {
        return false;
    };

    /**
     * Implementation of `register` lifecycle
     * @param model
     * @param saveAuth
     */
    register = (model: RegisterFormData, saveAuth: boolean): boolean => {
        return false;
    };

    /**
     * Implementation of `update` lifecycle
     * @param model
     */
    update = (model: UpdateDetailsFormData): boolean => {
        return false;
    };

    /**
     * This is where the provider is baked
     */
    render() {
        return <authContext.Provider value={{
            currentUser: this.state.currentUser,
            authToken: this.state.authToken,
            login: this.login,
            logout: this.logout,
            register: this.register,
            update: this.update
        }} {...this.props}/>
    }
}

export {AuthProvider}