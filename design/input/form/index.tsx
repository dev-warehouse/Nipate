import { ControlledFormElement, FormInput } from './base'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { useState } from 'react'

import styles from './index.module.scss'
import { ButtonUnstyled } from '@mui/base'

export function PasswordInput({
  register,
  errors,
  ...props
}: ControlledFormElement<any>) {
  const [visible, changeVisibility] = useState<boolean>(false)

  return (
    <FormInput
      {...props}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <ButtonUnstyled
          onClick={() => changeVisibility(state => !state)}
          className={styles.passwordToggle}
        >
          {visible ? <VscEye /> : <VscEyeClosed />}
        </ButtonUnstyled>
      }
    />
  )
}

export * from './base'