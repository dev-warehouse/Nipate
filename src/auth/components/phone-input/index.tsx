import { Input } from '@components/ui/input'
import { Option, Select } from '@components/ui/selectors'
import { Control, useController } from 'react-hook-form'
import { SelectOption } from '@mui/base/SelectUnstyled/useSelect.types'
import { MobileNumber } from '@/auth/models'
import { ChangeEvent } from 'react'
import styles from './index.module.scss'

const countries = [
  { code: 'KE', label: 'Kenya', phone: '254' },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255'
  },
  { code: 'UG', label: 'Uganda', phone: '256' }
]

interface PhoneNumberProps {
  /**
   * Form Input Label
   */
  label: string
  /**
   *Identifier for input in form hook
   */
  name: string
  /**
   *Registers updates to react hook form
   */
  control: Control<MobileNumber | any>
  /**
   * Placeholder for input
   */
  placeholder: string
  /**
   * Feedback message
   */
  errors: any
}

function PhoneInput({
  label,
  name,
  control,
  errors,
  placeholder
}: PhoneNumberProps) {
  const {
    field: { ref, onChange, value }
  } = useController({
    control,
    name,
    defaultValue: { code: '', phone: '' }
  })

  const handleCodeChange = (data: string) => {
    onChange({ code: data, phone: value.phone })
  }
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      code: value.code,
      phone: event.target.value.toString().split(/^(0)?([71]\d{8,12})$/)[2]
    })
  }

  const renderValue = (option: SelectOption<any> | null) => {
    if (option !== null) {
      return (
        <div className={styles.phone_option}>
          <img
            src={`https://flagcdn.com/${option?.label
              ?.toString()
              .toLowerCase()}.svg`}
            className={styles.phone_option_img}
            alt=''
          />
          <span>+{option.value}</span>
        </div>
      )
    }
    return (
      <div
        className={styles.phone_option}
        data-validity={errors[name] ? 'error' : 'initial'}
      >
        <div className={styles.phone_option_img} />
        <p>+123</p>
      </div>
    )
  }

  return (
    <div className='self-start'>
      <div className={styles.form_root}>
        <label
          htmlFor={name}
          className={styles.form_label}
          data-validity={errors[name] ? 'error' : 'initial'}
        >
          {label}
        </label>
        <div className={styles.phone_root}>
          <Select
            renderValue={renderValue}
            onChange={(e, code) => handleCodeChange(code)}
            value={value.code}
            listStyles={styles.phone_list}
            dataValidity={errors[name] ? 'error' : 'initial'}
          >
            {countries.map(country => {
              return (
                <Option
                  key={country.code}
                  value={country.phone}
                  label={country.code}
                >
                  <div className={styles.phone_option}>
                    <img
                      src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                      className={styles.phone_option_img}
                      alt=''
                    />
                    <span>({country.phone})</span>
                    <p>{country.label}</p>
                  </div>
                </Option>
              )
            })}
          </Select>
          <Input
            placeholder={placeholder}
            ref={ref}
            onChange={handlePhoneChange}
            dataValidity={errors[name] ? 'error' : 'initial'}
          />
        </div>
      </div>
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={errors[name] ? 'error' : 'initial'}
        >
          {errors[name].code && errors[name].phone
            ? 'Please provide phone number'
            : errors[name].code
            ? errors[name].code.message
            : errors[name].phone
            ? errors[name].phone.message
            : errors[name].message
            ? errors[name].message
            : ''}
        </p>
      )}
    </div>
  )
}

export default PhoneInput
