/* eslint-disable @typescript-eslint/no-explicit-any */
// Eslint down boy, stop barking when this is a multi type component
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import {
  OptionUnstyled,
  OptionUnstyledProps,
  SelectUnstyled,
  SelectUnstyledProps
} from '@mui/base'
import styles from './index.module.scss'

/**
 * Custom styled checkbox input
 * @param props
 * @constructor
 */
const CheckBox = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <input type='checkbox' className={styles.checkbox} ref={ref} {...props} />
  )
)

/**
 * Custom styled radio input
 * @param props
 * @constructor
 */
const Radio = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => <input type='radio' className={styles.radio} ref={ref} {...props} />
)

export interface SelectProps extends SelectUnstyledProps<any> {
  dataValidity?: 'initial' | 'success' | 'error'
  listStyles?: string
}

/**
 * Select Input but with styles
 * @param dataValidity
 * @param props
 * @param className Customizes select button
 * @param listStyles Customizes select listbox
 * @constructor
 */
const Select = forwardRef(
  (
    { className, listStyles, dataValidity, ...props }: SelectProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <SelectUnstyled
      data-validity={dataValidity}
      ref={ref}
      {...props}
      componentsProps={{
        root: {
          className: [className, styles.select_root].join(' ')
        },
        listbox: {
          className: [listStyles, styles.select_listbox].join(' ')
        },
        popper: {
          className: styles.select_popper
        }
      }}
    />
  )
)

Select.defaultProps = {
  dataValidity: 'initial',
  listStyles: ''
}

const Option = forwardRef(
  (
    { className, ...props }: OptionUnstyledProps<any>,
    ref: ForwardedRef<HTMLLIElement>
  ) => (
    <OptionUnstyled
      className={[className, styles.option].join(' ')}
      ref={ref}
      {...props}
    />
  )
)

export { CheckBox, Radio, Select, Option }
