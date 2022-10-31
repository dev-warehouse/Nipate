import useLogin from '@auth/hooks/useLogin'
import PhoneInput from '@auth/components/phone-input'
import { LoginFormData } from '@auth/models'
import { Button } from '@components/ui/buttons'
import { FormCheckBox, FormInput } from '@components/ui/form'
import { useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'
import { MdErrorOutline, MdOutlineCheckCircle } from 'react-icons/md'
import { RiSignalWifiErrorLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import Validator from '@auth/services/validator'
import styles from './index.module.scss'

function LoginPage() {
  const {
    register,
    control,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(Validator.loginDetailsSchema)
  })

  const { mutate, isPaused, isLoading, isError, isSuccess } = useLogin({
    clearErrors,
    reset,
    setError
  })

  const submit = (data: LoginFormData) => {
    mutate(data)
  }

  return (
    <form className={styles.login_root} onSubmit={handleSubmit(submit)}>
      <p className={styles.login_header}>Login to your Account</p>
      <PhoneInput
        label='Mobile Number'
        name='mobileNumber'
        placeholder='eg 712345678'
        control={control}
        errors={errors}
      />
      <FormInput
        label='Password'
        name='password'
        type='password'
        placeholder='••••••••••'
        className={styles.login_password}
        register={register}
        errors={errors}
      />
      <FormCheckBox
        label='Remember me'
        name='remember'
        register={register}
        errors={errors}
      />
      <Button type='submit' className={styles.btn_submit}>
        Login
        {isPaused && <RiSignalWifiErrorLine />}
        {isLoading && <CgSpinner className='animate-spin' />}
        {isError && <MdErrorOutline />}
        {isSuccess && <MdOutlineCheckCircle />}
      </Button>
      {isPaused && (
        <p className='mt-1 text-xs font-medium text-[#ef9400]'>
          Unable to Login: Check your Network connection Connection
        </p>
      )}
      <Link to='/auth/register' tabIndex={-1}>
        <Button variant='text' className={styles.btn_create}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span>Don't have an account?</span>
          <span className='ml-4 text-red-700'>Create Now</span>
        </Button>
      </Link>
    </form>
  )
}

export default LoginPage
