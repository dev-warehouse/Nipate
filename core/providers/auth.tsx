import {DOMAttributes, useMemo, useReducer} from "react";
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

export function saveAuthToken(token: string) {
    const {encrypt, hash} = useCrypto()
    const [, setToken] = useLocalStorage<string>(`n_${hash('token')}`, '')
    const {alert} = useNotification()

    encrypt(token, hash('NipateAuthToken_')).then((res: string) => {
        setToken(res)
    }).catch(() =>
        alert([{
            id: 'encrypt_error',
            type: 'toast',
            props: {
                message: 'Unable to save details : 0x184',
                status: 'error'
            }
        }])
    )
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

    // Utils hooks
    const {decrypt, hash} = useCrypto()
    const [token] = useLocalStorage<string>(`n_${hash('token')}`, '')
    const {alert} = useNotification()

    // Utils functions
    function decryptToken(token: string): string {
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

    }

    // Auto Login and update token on token change
    useMemo(() => {
        if (token !== '') {
            dispatch({type: 'setToken', data: decryptToken(token)})
        }
    }, [token])

    // Lifecycle Methods
    const setToken = (data: string) => dispatch({type: 'setToken', data: data})
    const setUser = (data: UserModel) => dispatch({type: 'setUser', data: data})
    const updateUser = (data: UserModel) => dispatch({type: 'updateUser', data: data})
    const removeUser = () => dispatch({type: 'removeUser'})

    return <authContext.Provider value={{
        currentUser: state.currentUser,
        authToken: state.authToken,
        setUser: setUser,
        setToken: setToken,
        removeUser: removeUser,
        updateUser: updateUser
    }} {...props}/>
}
