import {HTMLAttributes} from "react";
import {Footer, Header} from "@components/pages";
import styles from './index.module.scss'

export function AuthLayout(props: HTMLAttributes<HTMLDivElement>) {
    return <div className={styles.auth_root}>
        <Header page={'auth'}/>
        <main className="h-[100%] flex flex-col items-center justify-center">{props.children}</main>
        <Footer/>
    </div>
}