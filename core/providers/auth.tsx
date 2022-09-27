import {DOMAttributes, useMemo, useReducer, useState} from "react";
import {AuthActions, authContext, AuthLifecycleData, AuthReducer} from "@core/context";
import {useCrypto, useNotification} from "@core/hooks";
import {UserModel} from "@core/models";
import {useLocalStorage} from "usehooks-ts";
import axios, {AxiosError, AxiosResponse} from "axios";
import {AuthDeserializer, USER_DETAILS_URL, UserModelResponse} from "@core/api";

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
    const [rememberToken, setRememberToken] = useState(false)

    // Utils hooks
    const {encrypt, decrypt, hash} = useCrypto()
    const [token, saveToStorage] = useLocalStorage<string>(`t_${hash('token')}`, '')
    const {alert} = useNotification()

    // Auto Login and update token on token change
    useMemo(() => {
        if (token !== '') {
            decrypt(token, `${hash('NipateAuthToken_')}`).then(res => {
                dispatch({type: 'setToken', data: res})
            }).catch(() => {
                }
            )
        }
    }, [token])

    // For Saving token to storage
    useMemo(() => {
        if (rememberToken && state.authToken) {
            encrypt(state.authToken, hash('NipateAuthToken_')).then(res => {
                saveToStorage(res)
            }).catch(() =>
                alert([{
                    id: 'encrypt_error',
                    type: 'toast',
                    props: {
                        message: 'Unable to save details : 0x284',
                        status: 'error'
                    }
                }])
            )
        }
    }, [rememberToken])

    // Auto Fetching user details
    useMemo(() => {
        if (state.authToken) {
            axios.get<UserModelResponse>(`${USER_DETAILS_URL}`, {
                headers: {
                    Authorization: `Token ${state.authToken?.replace(/(^["']|["']$)/g, '')}`,
                }
            }).then(({data}: AxiosResponse<UserModelResponse>) => {
                dispatch({type: 'setUser', data: AuthDeserializer.userModel(data)})
            }).catch(({config}: AxiosError) => {
                console.log(config)
            })
        }
    }, [state.authToken])

    // Lifecycle Methods
    const setToken = (data: string) => dispatch({type: 'setToken', data: data})
    const saveToken = () => setRememberToken(true)
    const setUser = (data: UserModel) => dispatch({type: 'setUser', data: data})
    const updateUser = (data: UserModel) => dispatch({type: 'updateUser', data: data})
    const removeUser = () => {
        dispatch({type: 'removeUser'})
        if (token) {
            saveToStorage('')
        }
    }

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
