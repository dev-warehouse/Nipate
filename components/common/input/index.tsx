import {InputHTMLAttributes} from "react";
import styles from './index.module.scss'

/**
 * Extends `InputHtmlAttributes` and adds upon dataValidity for data feedback
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
const Input = ({dataValidity = 'initial', className, ...props}: InputProps) => {
    return <input className={[className,styles.input].join(' ')} data-validity={dataValidity} {...props}/>
}
export {Input}
export * from './form'
export type {InputProps}