import {DOMAttributes} from "react";

export default function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        {props.children}
    </>
}

export * from './auth'