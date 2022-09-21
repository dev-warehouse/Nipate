import {Footer, Header, HeaderProps} from "@components/pages";
import styles from '../auth/index.module.scss'
import Head from "next/head";

export interface GlobalLayoutProps extends HeaderProps {
    title?: string
}

export function GlobalLayout({page, title, children}: GlobalLayoutProps) {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main className={styles.auth_root}>
            <Header page={page}/>
            {children}
            <Footer/>
        </main>
    </>
}
