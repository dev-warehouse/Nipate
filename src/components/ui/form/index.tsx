import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import styles from './index.module.scss'
import { Input, InputProps } from '../input'
import { CheckBox } from '../selectors'

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */
interface FormInputProps extends InputProps {
  /**
   * Form Input Label
   */
  label: string
  /**
   *Identifier for input in form hook
   */
  name: string
  /**
   * Attaches component to form hook
   */
  register: UseFormRegister<FieldValues>
  /**
   * Feedback message
   */
  errors: FieldErrors
}

export function FormCheckBox({
  label,
  name,
  dataValidity,
  register,
  errors
}: FormInputProps) {
  return (
    <div className='self-start'>
      <div className='inline-flex gap-2 flex-row-reverse'>
        <label
          htmlFor={name}
          className={styles.form_label}
          data-validity={dataValidity || (errors[name] ? 'error' : 'initial')}
        >
          {label}
        </label>
        <CheckBox id={name} {...register(name)} />
      </div>
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={dataValidity || (errors[name] ? 'error' : 'initial')}
        >
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  )
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
export function FormInput({
  label,
  name,
  register,
  errors,
  children,
  dataValidity,
  ...props
}: FormInputProps) {
  return (
    <div className={styles.form_root}>
      <label
        htmlFor={name}
        className={styles.form_label}
        data-validity={dataValidity || (errors[name] ? 'error' : 'initial')}
      >
        {label}
      </label>
      {children ?? (
        <Input
          id={name}
          className={styles.form_input}
          dataValidity={dataValidity || (errors[name] ? 'error' : 'initial')}
          {...register(name)}
          {...props}
        />
      )}
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={dataValidity || (errors[name] ? 'error' : 'initial')}
        >
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  )
}
