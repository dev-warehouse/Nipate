import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Input, InputProps } from '..'
import styles from './index.module.scss'

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */

type FormFeedback = {
    variant: InputProps['dataValidity']
    message: string
  }

interface FormInputProps extends InputProps {
  /**
   * Form Input Label
   */
  label: string
  /**
   * Feedback message
   */
  feedback?: FormFeedback
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
export default function FormInput({ label, name, feedback, ...props }: FormInputProps) {
  return (
    <div className={styles.form_root}>
      <label
        htmlFor={name}
        className={styles.form_label}
        data-validity={feedback?.variant}
      >
        {label}
      </label>
      <Input
        id={name}
        className={styles.form_input}
        dataValidity={feedback?.variant}
        {...props}
      />
      {feedback && (
        <p className={styles.form_message} data-validity={feedback?.variant}>
          {feedback?.message}
        </p>
      )}
    </div>
  )
}
