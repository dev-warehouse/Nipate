import {Input, InputProps} from ".";
import styles from "./index.module.scss";
import {UseFormRegister} from "react-hook-form";

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */
interface FormInputProps extends InputProps {
    /**
     * Form Input Label
     */
    label: string;
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
    errors?: any;

}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
function FormInput({label, name, register, errors, children, dataValidity, ...props}: FormInputProps) {
    return (
        <div className={styles.form_root}>
            <label htmlFor={name} className={styles.form_label} data-validity={errors[name] ? 'error' : 'initial'}>
                {label}
            </label>
            {children ?? (<Input id={name} className={styles.form_input}
                                 dataValidity={errors[name] ? 'error' : 'initial'} {...props} />)}
            {errors[name] ? (
                <p className={styles.form_message}
                   data-validity={errors[name] ? 'error' : 'initial'}>{errors[name].message}</p>
            ) : (<></>)}
        </div>
    );
}

export {FormInput};
