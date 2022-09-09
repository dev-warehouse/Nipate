import {InputHTMLAttributes} from "react";
import styles from './index.module.scss'

function CheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input type="checkbox" className={styles.checkbox} {...props}/>
}

function Radio(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input type="radio" className={styles.radio} {...props}/>
}

export {CheckBox, Radio}