import {HTMLAttributes} from "react";

export function AuthLayout(props: HTMLAttributes<HTMLDivElement>) {
    return <div>
        <div>Header</div>
        <main>{props.children}</main>
    </div>
}