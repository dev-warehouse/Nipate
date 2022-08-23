import {ButtonHTMLAttributes} from "react";
import styles from './index.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'text' | 'outline' | 'solid'
}

const Button = ({variant = 'solid', className, ...props}: ButtonProps) => {
    return <button
        className={[className, styles.base, variant === 'text' ? styles.text : variant == 'outline' ? styles.outline : styles.solid].join(' ')} {...props}/>
}

export {Button};
export type {ButtonProps};
