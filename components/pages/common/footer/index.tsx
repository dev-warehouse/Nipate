import styles from './index.module.scss'
import {HTMLAttributes} from "react";

function Footer({className, ...props}: HTMLAttributes<HTMLDivElement>) {
    return <>
        <div className={[className, styles.root].join(' ')} {...props}>
            <p className={styles.item}>Copyright ©️ 2022 Bespoke Systems</p>
            <div className={styles.separator}/>
            <p className={styles.item}>Trademark Policy</p>
            <div className={styles.separator}/>
            <p className={styles.item}>Terms of Service</p>
        </div>
    </>
}

export {Footer}