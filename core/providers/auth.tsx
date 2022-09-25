import {DOMAttributes, useEffect, useMemo, useReducer, useState} from "react";
import {AuthActions, authContext, AuthLifecycleData, AuthReducer} from "@core/context";
import {useCrypto, useNotification} from "@core/hooks";
import {UserModel} from "@core/models";
import {useLocalStorage} from "usehooks-ts";

/**
 * Reducer for Auth States
 * @param prevState
 * @param action
 */
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

    // Auth Lifecycle state hook
    const [state, dispatch] = useReducer<AuthReducer>(reducerAuth, {})

    // For whether to save token to storage
    const [saveTokenStorage, setSaveTokenStorage] = useState(false)

    // Utils hooks
    const {encrypt, decrypt, hash} = useCrypto()
    const [token, setTokenStorage] = useLocalStorage<string>(`t_${hash('token')}`, '')
    const {alert} = useNotification()

    // Utils functions
    function encryptToken(token: string): string {
        let tkn = ''
        encrypt(token, hash('NipateAuthToken_')).then(res => {
            console.log(`Prev: ${token} Returned encrypted: ${res}`)
            tkn = token
        }).catch(() =>
            alert([{
                id: 'decrypt_error',
                type: 'toast',
                props: {
                    message: 'Unable to save details : 0x284',
                    status: 'error'
                }
            }])
        )
        console.log(`oToken: ${token} nToken: ${tkn}`)
        return tkn
    }

    function decryptToken(token: string): string {
        let tkn = ''
        decrypt(token, hash('NipateAuthToken_')).then(r => {
            tkn = r.toString()
        }).catch(() =>
            alert([{
                id: 'decrypt_error',
                type: 'toast',
                props: {
                    message: 'Unable to save details : 0x284',
                    status: 'error'
                }
            }])
        )
        console.log(`oToken: ${token} nToken: ${tkn}`)
        return tkn
    }

    // Auto Login and update token on token change
    useEffect(() => {
        if (token !== '') {
            dispatch({type: 'setToken', data: decryptToken(token)})
        }
    })

    // For Saving token to storage
    useMemo(
        () => {
            if (saveTokenStorage) {
                setTokenStorage(encryptToken(state.authToken ?? 'No token'))
            }
        }, [saveTokenStorage]
    )

    // Lifecycle Methods
    const setToken = (data: string) => dispatch({type: 'setToken', data: data})
    const saveToken = () => setSaveTokenStorage(true)
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
