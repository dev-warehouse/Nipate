import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {AuthSerializer, LOGIN_URL, LoginResponseData} from "@core/api";
import {LoginFormData} from "@core/models";
import {UseFormReturn} from "react-hook-form";

interface UseLoginProps extends Pick<UseFormReturn<LoginFormData>, 'clearErrors' | 'reset' | 'setError'> {
}

export function useLogin({clearErrors, reset, setError}: UseLoginProps) {

    return useMutation<AxiosResponse<LoginResponseData>, AxiosError<any>, LoginFormData>({
        mutationFn: (data) => axios.post(LOGIN_URL, AuthSerializer.login(data)),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
    })
}