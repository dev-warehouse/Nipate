import { UseFormReturn } from 'react-hook-form'
import { LoginFormData } from '@auth/models'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useAxios } from '@core/hooks/axios'
import { LOGIN_URL } from '@api/urls/auth'

type UseLoginProps = Pick<
  UseFormReturn<LoginFormData>,
  'clearErrors' | 'reset' | 'setError'
>

export default function useLogin({
  clearErrors,
  reset,
  setError
}: UseLoginProps) {
  const axios = useAxios()

  return useMutation<any, AxiosError<any>, LoginFormData>(
    ({ remember, ...data }) => {
      console.log(remember)
      return axios.post(LOGIN_URL, data)
    },
    {
      onSuccess: () => {
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

        if (response?.data?.error[0] === 'Invalid user creditentials') {
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
