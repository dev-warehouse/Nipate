import {HTMLAttributes} from "react";
import {Header} from "@components/pages";
import styles from './index.module.scss'

export function AuthLayout(props: HTMLAttributes<HTMLDivElement>) {
    return <div className={styles.auth_root}>
        <Header page={'auth'}/>
        <main>{props.children}</main>
    </div>
}