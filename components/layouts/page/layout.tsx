import {Footer, Header, HeaderProps} from "@components/pages";
import styles from '../auth/index.module.scss'

export function GlobalLayout({page, children}: HeaderProps) {
    return <main className={styles.auth_root}>
        <Header page={page}/>
        {children}
        <Footer/>
    </main>
}
