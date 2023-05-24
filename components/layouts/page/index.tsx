import {Footer, Header, HeaderProps} from "@components/pages";
import Head from "next/head";

export interface GlobalLayoutProps extends HeaderProps {
    title?: string
}

export function GlobalLayout({page, title, children}: GlobalLayoutProps) {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main className="h-full flex flex-col items-center">
            <Header page={page}/>
            {children}
            <Footer/>
        </main>
    </>
}
