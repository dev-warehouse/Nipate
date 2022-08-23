import {InputHTMLAttributes} from "react";
import styles from './index.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    dataValidity?: 'initial' | 'success' | 'error'
}

const Input = ({dataValidity = 'initial', className, ...props}: InputProps) => {
    return <input className={[className,styles.input].join(' ')} data-validity={dataValidity} {...props}/>
}
export {Input}
export type {InputProps}