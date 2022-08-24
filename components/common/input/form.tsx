import {Input, InputProps} from ".";
import styles from './index.module.scss'
import {ReactNode} from "react";

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */
interface FormInputProps extends InputProps {
    /**
     * Form Input Label
     */
    inputLabel: string
    /**
     * Feedback message
     */
    feedback?: string
    /**
     * Specifying children overrides default Input Component
     */
    children?: ReactNode
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param props
 * @constructor
 */
const FormInput = ({inputLabel, ...props}: FormInputProps) => {
    return <div className={styles.form_root}>
        <label className={styles.form_label} data-validity={props.dataValidity}>{inputLabel}</label>
        {props.children ?? <Input className={styles.form_input} {...props}/>}
        {props.feedback !== undefined ? <p className={styles.form_message} data-validity={props.dataValidity}>{props.feedback}</p> : <></>}
    </div>
}

export {FormInput}