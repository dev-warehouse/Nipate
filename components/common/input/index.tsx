import styles from './index.module.scss'
import {InputUnstyled, inputUnstyledClasses, InputUnstyledProps} from "@mui/base";

/**
 * Extends `InputHtmlAttributes` and adds upon dataValidity for data feedback
 */
interface InputProps {
    /**
     * This is used to show the various feedback states of the data
     */
    dataValidity?: 'initial' | 'success' | 'error'
}


/**
 * Custom Input that extends HtmlInput with custom styles and user feedback
 * @param dataValidity
 * @param className
 * @param props
 * @constructor
 */
function Input({dataValidity, className, ...props}: InputProps & InputUnstyledProps) {
    inputUnstyledClasses.focused = styles.root_focused;
    return <InputUnstyled data-validity={dataValidity} className={[className, styles.root].join(' ')} {...props}/>
}

export {Input}
export * from './form'
export type {InputProps}