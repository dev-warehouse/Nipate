import { Gender } from '@api/models/user'
import { Radio } from '@components/ui/selectors'
import { Control, useController } from 'react-hook-form'
import styles from './index.module.scss'

export interface GenderInputProps {
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
  control: Control<Gender | any>
  /**
   * Feedback message
   */
  errors: any
}

export default function GenderInput({
  errors,
  control,
  label,
  name
}: GenderInputProps) {
  const {
    field: { value, onChange, ref }
  } = useController({ control, name })

  const handleMale = () => onChange({ id: 1, name: 'male' })
  const handleFemale = () => onChange({ id: 2, name: 'female' })

  return (
    <div className={styles.gender_form_root}>
      <label
        htmlFor={name}
        className={styles.form_label}
        data-validity={errors[name] && 'error'}
      >
        {label}
      </label>
      <div className={styles.gender_root}>
        <main>
          <label htmlFor='male' className={styles.gender_label}>
            Male:{' '}
          </label>
          <Radio
            id='male'
            name={name}
            ref={ref}
            value={value}
            checked={value?.id === 1}
            onChange={handleMale}
          />
        </main>
        <main>
          <label htmlFor='female' className={styles.gender_label}>
            Female:{' '}
          </label>
          <Radio
            id='female'
            name={name}
            value={value}
            checked={value?.id === 2}
            onChange={handleFemale}
          />
        </main>
      </div>
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={errors[name] && 'error'}
        >
          {errors[name].message
            ? errors[name].message
            : errors[name].id.message
            ? errors[name].id.message
            : errors[name].name.message
            ? errors[name].name.message
            : ''}
        </p>
      )}
    </div>
  )
}
