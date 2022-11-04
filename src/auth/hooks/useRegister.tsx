import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { FINALIZE_REGISTER_URL, REGISTER_URL } from '@/api/urls/auth'
import { useAuth } from '@auth/context/auth'
import {
  CreateUserFormData,
  CreateUserResponseData,
  LoginResponseData,
  RegisterUserFormData,
  registerUserSerializer
} from '../models'

interface UseRegisterProps
  extends Pick<UseFormReturn<any>, 'clearErrors' | 'reset' | 'setError'> {
  setContinueData: Dispatch<SetStateAction<CreateUserResponseData>>
  setStage?: Dispatch<SetStateAction<0 | 1>>
}

export function useCreateUser({
  clearErrors,
  reset,
  setError,
  setContinueData
}: UseRegisterProps) {
  return useMutation<
    AxiosResponse<CreateUserResponseData>,
    AxiosError<any>,
    CreateUserFormData
  >({
    mutationFn: ({ mobileNumber, ...data }) => {
      const payload = {
        mobileNumber: `${mobileNumber.code}${mobileNumber.phone}`,
        ...data
      }
      return axios.post(REGISTER_URL, payload)
    },
    onSuccess: ({ data }) => {
      setContinueData(data)
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
      if (response?.data?.error === 'User with number already exist') {
        setError('mobileNumber', {
          message:
            'User with number already exist, you can log in with the account'
        })
      }
    }
  })
}

export function useRegisterUser({
  clearErrors,
  reset,
  setError
}: UseRegisterProps) {
  const { setToken } = useAuth()

  return useMutation<
    AxiosResponse<LoginResponseData>,
    AxiosError<any>,
    { createdID: number; payload: RegisterUserFormData }
  >({
    mutationFn: ({ createdID, payload }) => {
      return axios.put(
        FINALIZE_REGISTER_URL,
        registerUserSerializer(createdID, payload)
      )
    },
    onSuccess: ({ data }) => {
      setToken(data.auth_token)
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
      if (
        response?.data?.password[0] ===
        'Ensure this field has at least 8 characters.'
      ) {
        setError('password', {
          message:
            'Password should have at least 8 characters for better hashing'
        })
      }

      if (response?.data?.Error === "User doesn't exists") {
        setError('password', {
          message: "User with number doesn't exist, try again"
        })
      }
    }
  })
}
