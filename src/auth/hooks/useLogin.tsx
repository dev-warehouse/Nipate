import { UseFormReturn } from 'react-hook-form'
import { LoginFormData, LoginResponseData } from '@auth/models'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { LOGIN_URL } from '@api/urls/auth'
import { useAuth } from '@auth/context/auth'

type UseLoginProps = Pick<
  UseFormReturn<LoginFormData>,
  'clearErrors' | 'reset' | 'setError'
>

export default function useLogin({
  clearErrors,
  reset,
  setError
}: UseLoginProps) {
  const { setToken } = useAuth()
  let rememberUser: boolean

  return useMutation<
    AxiosResponse<LoginResponseData>,
    AxiosError<any>,
    LoginFormData
  >(
    ({ remember, mobileNumber, ...data }) => {
      rememberUser = remember
      return axios.post(LOGIN_URL, {
        mobileNumber: `${mobileNumber.code}${mobileNumber.phone}`,
        ...data
      })
    },
    {
      onSuccess: ({ data }) => {
        setToken(data.auth_token, rememberUser)
        reset(undefined)
        clearErrors()
      },
      onError: ({ code, response }) => {
        if (code === AxiosError.ERR_NETWORK) {
          // showAlert([
          //   {
          //     id: 'network_error',
          //     type: 'toast',
          //     props: {
          //       message:
          //         'Connection to server failed, please check your network for any proxies ',
          //       status: 'error',
          //       icon: <RiSignalWifiErrorLine />
          //     }
          //   }
          // ])
        }

        if (response?.data?.error[0] === 'Invalid user credentials') {
          setError('password', {
            message: `Incorrect password, check your password`
          })
        }

        if (response?.data?.error[0] === 'User not found') {
          setError('mobileNumber', {
            message: `${response?.data.error[0]} : please check your number or create a new account`
          })
        }
      }
    }
  )
}
