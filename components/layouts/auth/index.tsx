import {HTMLAttributes} from "react";
import {Header} from "@components/pages";

export function AuthLayout(props: HTMLAttributes<HTMLDivElement>) {
    return <div>
        <Header page={'auth'}/>
        <main>{props.children}</main>
    </div>
}