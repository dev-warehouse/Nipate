import {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import styles from './index.module.scss'
import {InputUnstyled, InputUnstyledProps} from "@mui/base";

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
const Input = forwardRef(function ({
                                       dataValidity,
                                       ...props
                                   }: InputProps & InputUnstyledProps, ref: ForwardedRef<HTMLInputElement>) {
    return <InputUnstyled ref={ref} data-validity={dataValidity} componentsProps={{
        input: {
            className: [props.className, styles.input].join(' '),
            ...props.componentsProps
        },
        root: {
            className: styles.root,
            ...props.componentsProps
        }
    }} {...props}/>
})

export {Input}
export * from './form'
export type {InputProps}