import {HTMLAttributes} from "react";
import {Footer, Header} from "@components/pages";
import styles from './index.module.scss'
import Head from "next/head";

export interface AuthLayoutProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
}

export function AuthLayout(props: AuthLayoutProps) {
    return <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <div className={styles.auth_root}>
            <Header page={'auth'}/>
            <main className={styles.auth_body}>{props.children}</main>
            <Footer/>
        </div>
    </>
}