import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Input, InputProps } from '..'
import styles from './index.module.scss'

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
  register: UseFormRegister<any>
  /**
   * Feedback message
   */
  errors: FieldErrors
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
export default function FormInput({
  label,
  name,
  register,
  errors,
  ...props
}: FormInputProps) {
  return (
    <div className={styles.form_root}>
      <label htmlFor={name} className={styles.form_label}>
        {label}
      </label>
      <Input id={name} className={styles.form_input} {...props} />
      {errors[name] && (
        <p className={styles.form_message}>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  )
}
