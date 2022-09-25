import {DOMAttributes, useMemo, useReducer} from "react";
import {AuthActions, authContext, AuthLifecycleData, AuthReducer} from "@core/context";
import {useCrypto, useNotification} from "@core/hooks";
import {UserModel} from "@core/models";
import {useLocalStorage} from "usehooks-ts";


const {encrypt, decrypt, hash} = useCrypto()

function encryptToken(token: string): string {

    const {alert} = useNotification()
    return useCallback(() => {
        let res = ''
        encrypt(token, hash('NipateAuthToken_')).then(res => res).catch(() =>
            alert([{
                id: 'encrypt_error',
                type: 'toast',
                props: {
                    message: 'Unable to save details : 0x184',
                    status: 'error'
                }
            }])
        )
        return res
    }, [token])()

}


function decryptToken(token: string): string {

    return useCallback(() => {
        let res = ''
        decrypt(token, hash('NipateAuthToken_')).then(res => res).catch(() =>
            alert([{
                id: 'decrypt_error',
                type: 'toast',
                props: {
                    message: 'Unable to save details : 0x284',
                    status: 'error'
                }
            }])
        )
        return res
    }, [token])()

function reducerAuth(prevState: AuthLifecycleData, action: AuthActions): AuthLifecycleData {
    switch (action.type) {
        case "removeUser":
            return {}
        case "setToken":
            return {authToken: action.data}
        case "setUser":
            return {currentUser: action.data}
        case "updateUser":
            return {currentUser: {...action.data}}
        default:
            return {}
    }
}

/**
 * This provider is responsible to all things to do with user authentication
 *
 * It handles the implementation of all authentication lifecycle methods
 * by inheriting from `AuthLifecycleActions` and handles the state of all lifecycle data by
 * taking `AuthLifecycleData` as a state argument.
 */
export function AuthProvider(props: DOMAttributes<any>) {

    const [state, dispatch] = useReducer<AuthReducer>(reducerAuth, {})
    const [token, setSavedToken] = useLocalStorage<string>(`n_${hash('token')}`, '')

    const setToken = (data: string) => dispatch({type: 'setToken', data: data})
    const saveToken = (token: string) => setSavedToken(token)
    const setUser = (data: UserModel) => dispatch({type: 'setUser', data: data})
    const updateUser = (data: UserModel) => dispatch({type: 'updateUser', data: data})
    const removeUser = () => dispatch({type: 'removeUser'})

    return <authContext.Provider value={{
        currentUser: state.currentUser,
        authToken: state.authToken,
        setUser: setUser,
        setToken: setToken,
        saveToken: saveToken,
        removeUser: removeUser,
        updateUser: updateUser
    }} {...props}/>
}
