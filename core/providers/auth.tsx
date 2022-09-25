import {DOMAttributes, useCallback, useEffect, useState} from "react";
import {UserModel} from "@core/models";
import {authContext, AuthLifecycleData} from "@core/context";
import {useCrypto, useLocalStorage, useNotification} from "@core/hooks";


const encryptToken = (token: string): string => {
    const {encrypt, hash} = useCrypto()
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


const decryptToken = (token: string): string => {
    const {decrypt, hash} = useCrypto()
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

}

/**
 * This provider is responsible to all things to do with user authentication
 *
 * It handles the implementation of all authentication lifecycle methods
 * by inheriting from `AuthLifecycleActions` and handles the state of all lifecycle data by
 * taking `AuthLifecycleData` as a state argument.
 */
export function AuthProvider(props: DOMAttributes<any>) {

    const [state, setState] = useState<AuthLifecycleData>()

    const [token, saveTokenStorage] = useLocalStorage('token', '')


    useEffect(() => {

        /**
         * This is responsible to auto authenticating user when one has saved their login details
         */
        if (token !== '') {
            const tkn = decryptToken(token)
            setState({authToken: tkn})
        }
    })

    /**
     * Implementation of `login` lifecycle
     * @param model
     */
    const setUser = (model: UserModel) => setState({currentUser: model})

    const setToken = (token: string) => {
        setState({authToken: token})
    }

    const saveToken = (token: string) => {
        const tkn = encryptToken(token)
        saveTokenStorage(tkn)
    }

    /**
     * Implementation of `logout` lifecycle
     */
    const removeUser = () => setState({currentUser: undefined});

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
        saveToken: saveToken,
        removeUser: removeUser,
        updateUser: updateUser
    }} {...props}/>
}
