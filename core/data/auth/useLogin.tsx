import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {AuthSerializer, LOGIN_URL, LoginResponseData} from "@core/api";
import {LoginFormData} from "@core/models";
import {UseFormReturn} from "react-hook-form";
import {useAlertNotification, useAuth} from "@core/hooks";
import {useRouter} from "next/router";
import {RiSignalWifiErrorLine} from "react-icons/ri";

interface UseLoginProps extends Pick<UseFormReturn<LoginFormData>, 'clearErrors' | 'reset' | 'setError'> {
}

export function useLogin({clearErrors, reset, setError}: UseLoginProps) {

    const {setToken, saveToken} = useAuth()
    const {showAlert} = useAlertNotification()
    const router = useRouter()

    let saveTokenS = false

    return useMutation<AxiosResponse<LoginResponseData>, AxiosError<any>, LoginFormData>({
        mutationFn: ({remember, ...data}) => {
            saveTokenS = remember;
            return axios.post(LOGIN_URL, AuthSerializer.login(data))
        },
        onSuccess: ({data: {Auth_token, FirstName}}) => {
            setToken(Auth_token)
            if (saveTokenS) saveToken()
            showAlert([{
                id: `welcome_${FirstName}`,
                type: 'toast',
                props: {
                    message: `Welcome back ${FirstName} `,
                    status: 'success',
                }
            }])
            reset(undefined)
            clearErrors()
            router.push('/')
        },
        onError: ({code, response}) => {
            if (code === AxiosError.ERR_NETWORK) {
                showAlert([{
                    id: 'network_error',
                    type: 'toast',
                    props: {
                        message: 'Connection to server failed, please check your network for any proxies ',
                        status: 'error',
                        icon: <RiSignalWifiErrorLine/>,
                    }
                }])
            }

            if (response?.data.error[0] === "Invalid user creditentials") {
                setError('password', {message: `Incorrect password, check your password`})
            }

            if (response?.data.error[0] === 'User not found') {
                setError('mobile.number', {message: `${response?.data.error[0]} : please check your number or create a new account`})
            }

        },
    })
}