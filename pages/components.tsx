import {NextPage} from "next";
import Head from "next/head";
import {Button, FormInput, Input} from "@components/common";

const Components: NextPage = () => {
    const planet = new Map<string, string>();
    const countries: Map<string, string> = new Map([
        ['france', '🇫🇷'],
        ['united-kingdom', '🇬🇧'],
        ['spain', '🇪🇸'],
    ]);
    planet.set("name", "earth");
    planet.set("position", "1");


    return <div className={"flex flex-col items-center justify-center"}>
        <Head>
            <title>Components</title>
        </Head>
        <main className={"flex flex-col gap-4 py-10"}>
            <Button>Button</Button>
            <Button variant={'outline'}>Button</Button>
            <Button variant={'text'}>Button</Button>
            <Input/>
            <Input placeholder={"Success Input"} dataValidity={'success'}/>
            <Input placeholder={"Error Input"} dataValidity={'error'}/>
            <div><span>Label</span> <Input placeholder={"Span Input"}/></div>
            <FormInput inputLabel={"Form Input"}/>
            <FormInput inputLabel={"Form Input Success"} dataValidity={'success'} feedback={"Success"}/>
            <FormInput inputLabel={"Form Input Error"} dataValidity={'error'} feedback={"Error"}/>
        </main>
    </div>
}

export default Components