import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {AuthSerializer, LOGIN_URL, LoginResponseData} from "@core/api";
import {LoginFormData} from "@core/models";
import {UseFormReturn} from "react-hook-form";
import {useAuth, useNotification} from "@core/hooks";
import {useRouter} from "next/router";
import {RiSignalWifiErrorLine} from "react-icons/ri";

interface UseLoginProps extends Pick<UseFormReturn<LoginFormData>, 'clearErrors' | 'reset' | 'setError'> {
}

export function useLogin({clearErrors, reset, setError}: UseLoginProps) {

    const {setToken, saveToken} = useAuth()
    const {alert} = useNotification()
    const router = useRouter()

    let saveTokenS = false

    return useMutation<AxiosResponse<LoginResponseData>, AxiosError<any>, LoginFormData>({
        mutationFn: ({remember, ...data}) => {
            saveTokenS = remember;
            return axios.post(LOGIN_URL, AuthSerializer.login(data))
        },
        onSuccess: ({data: {Auth_token, FirstName}}) => {
            setToken(Auth_token)
            if (saveTokenS) saveToken(Auth_token);
            alert([{
                id: `welcome_${FirstName}`,
                type: 'toast',
                props: {
                    message: `Welcome back ${FirstName} `,
                    status: 'success',
                }
            }])
            reset(undefined)
            clearErrors()
            router.push('/', 'Welcome')
        },
        onError: ({code, response}) => {
            if (code === AxiosError.ERR_NETWORK) {
                alert([{
                    id: 'network_error',
                    type: 'toast',
                    props: {
                        message: 'Connection to server failed, please check your network for any proxies ',
                        status: 'error',
                        icon: <RiSignalWifiErrorLine/>,
                    }
                }])
            }
            console.log(response)
        },
    })
}