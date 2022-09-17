import {Input, InputProps} from ".";
import styles from "./index.module.scss";

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */
interface FormInputProps extends InputProps {
    /**
     * Form Input Label
     */
    inputLabel: string;
    /**
     * Feedback message
     */
    feedback?: string;
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
function FormInput({inputLabel, children, ...props}: FormInputProps) {
    const label = inputLabel.toLowerCase().split(" ").join("-").toString();
    return (
        <div className={styles.form_root}>
            <label htmlFor={label} className={styles.form_label} data-validity={props.dataValidity}>
                {inputLabel}
            </label>
            {children ?? (<Input id={label} className={styles.form_input} {...props} />)}
            {props.feedback !== undefined ? (
                <p className={styles.form_message} data-validity={props.dataValidity}>{props.feedback}</p>
            ) : (<></>)}
        </div>
    );
}

export {FormInput};
