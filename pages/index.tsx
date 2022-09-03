import type {NextPage} from "next";
import Head from "next/head";
import {Header} from "../components";

const Home: NextPage = () => {
    return (
        <div className="px-3 py-2">
            <Head>
                <title>Landing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
            </main>
        </div>
    );
};

export default Home;
