import {DOMAttributes, useState} from "react";
import {UserModel} from "@core/models";
import {authContext, AuthLifecycleData} from "@core/context";


/**
 * This provider is responsible to all things to do with user authentication
 *
 * It handles the implementation of all authentication lifecycle methods
 * by inheriting from `AuthLifecycleActions` and handles the state of all lifecycle data by
 * taking `AuthLifecycleData` as a state argument.
 */
export function AuthProvider(props: DOMAttributes<any>) {

    const [state, setState] = useState<AuthLifecycleData>()


    /**
     * This is responsible to auto authenticating user when one has saved their login details
     */
    const autoLogin = () => {
        console.log("Auto Login")
    }

    /**
     * Implementation of `login` lifecycle
     * @param model
     */
    const setUser = (model: UserModel) => setState({currentUser: model})

    const setToken = (token: string) => setState({authToken: token})

    /**
     * Implementation of `logout` lifecycle
     */
    const removeUser = () => setState({currentUser: undefined, authToken: undefined});

    /**
     * Implementation of `update` lifecycle
     * @param model
     */
    const updateUser = (model: UserModel) => setState({currentUser: {...model}});


    return <authContext.Provider value={{
        currentUser: state?.currentUser,
        authToken: state?.authToken,
        setUser: setUser,
        setToken: setToken,
        removeUser: removeUser,
        updateUser: updateUser
    }} {...props}/>
}
