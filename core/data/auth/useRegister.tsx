import {UseFormReturn} from "react-hook-form";
import {CreateUserFormData, LoginFormData, RegisterUserFormData} from "@core/models";
import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
    AuthSerializer,
    CreateUserResponseData,
    FINALIZE_REGISTER_URL,
    LoginResponseData,
    REGISTER_URL
} from "@core/api";
import {Dispatch, SetStateAction} from "react";
import {RiSignalWifiErrorLine} from "react-icons/ri";
import {useAuth} from "@core/hooks";

interface UseRegisterProps extends Pick<UseFormReturn<LoginFormData>, 'clearErrors' | 'reset' | 'setError'> {
    setContinueData: Dispatch<SetStateAction<CreateUserResponseData>>
    setStage?: Dispatch<SetStateAction<0 | 1>>
}

export function useCreateUser({clearErrors, reset, setError, setContinueData}: UseRegisterProps) {
    return useMutation<AxiosResponse<CreateUserResponseData>, AxiosError<any>, CreateUserFormData>({
        mutationFn: (data) => {
            return axios.post(REGISTER_URL, AuthSerializer.createUser(data))
        },
        onSuccess: ({data}) => {
            setContinueData(data)
            reset(undefined)
            clearErrors()
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
            if (response?.data?.Error === "User with number already exist") {
                setError('mobile', {message: "User with number already exist, you can log in with the account"})
            }
        }
    })
}

export function useRegisterUser({clearErrors, reset, setError, setStage}: UseRegisterProps) {
    const {setToken} = useAuth()

    return useMutation<AxiosResponse<LoginResponseData>, AxiosError<any>, { createdID: number, remember?: boolean, payload: RegisterUserFormData }>({
        mutationFn: ({remember, ...data}) => {
            return axios.put(FINALIZE_REGISTER_URL, AuthSerializer.registerUser(data))
        },
        onSuccess: ({data: {Auth_token}}) => {
            setToken(Auth_token)
            reset(undefined)
            clearErrors()
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
            if (response?.data?.Error === "User doesn't exists") {
                setError('password', {message: "User with number doesn't exist, try again"})
                if (setStage) {
                    setStage(0)
                }
            }
        }
    })
}
