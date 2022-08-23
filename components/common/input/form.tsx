import {Input, InputProps} from ".";
import styles from './index.module.scss'

interface FormInputProps extends InputProps {

}

const FormInput = (props: FormInputProps) => {
    return <div className={styles.form_root}>
        <label className={styles.form_label}>Label</label>
        <Input className={styles.form_input} {...props}/>
    </div>
}
export {FormInput}