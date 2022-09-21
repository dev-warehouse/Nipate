import type {NextPage} from "next";
import Head from "next/head";
import {Header} from "../components";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Landing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
            </main>
        </>
    );
};

export default Home;
