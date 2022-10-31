import { Input } from '@components/ui/input'
import { Option, Select } from '@components/ui/selectors'
import { Control, FieldErrors, useController } from 'react-hook-form'
import { SelectOption } from '@mui/base/SelectUnstyled/useSelect.types'
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
  control: Control<any>
  /**
   * Placeholder for input
   */
  placeholder: string
  /**
   * Feedback message
   */
  errors: FieldErrors
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
  } = useController({ control, name, defaultValue: undefined })

  const renderValue = (option: SelectOption<any> | null) => {
    if (option !== null) {
      return (
        <div className={styles.phone_option}>
          <img
            src={`https://flagcdn.com/${option.value.toLowerCase()}.svg`}
            className={styles.phone_option_img}
            alt=''
          />
          <span>+{option.label}</span>
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
            defaultValue='KE'
            value={country}
            // onChange={}
            listStyles={styles.phone_list}
            dataValidity={errors[name] ? 'error' : 'initial'}
          >
            {countries.map(country => {
              return (
                <Option
                  key={country.code}
                  value={country.code}
                  label={country.phone}
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
            // onChange={e => handleValueChange(e.target.value)}
            dataValidity={errors[name] ? 'error' : 'initial'}
          />
        </div>
      </div>
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={errors[name] ? 'error' : 'initial'}
        >
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  )
}

export default PhoneInput
