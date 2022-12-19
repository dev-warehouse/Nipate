import InputUnstyled, {
  inputUnstyledClasses,
  InputUnstyledProps
} from '@mui/base/InputUnstyled'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import styles from './index.module.scss'

/**
 * Extends `InputHtmlAttributes` and adds upon dataValidity for data feedback
 */
type InputProps = InputUnstyledProps & {
  /**
   * This is used to show the various feedback states of the data
   */
  dataValidity?: 'initial' | 'success' | 'error' | 'warning'
}

/**
 * Custom Input that extends HtmlInput with custom styles and user feedback
 * @param dataValidity
 * @param className
 * @param props
 * @constructor
 */

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    { dataValidity, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    inputUnstyledClasses.focused = styles.root_focused
    return (
      <InputUnstyled
        data-validity={dataValidity}
        className={[className, styles.root].join(' ')}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Input
export type { InputProps }
