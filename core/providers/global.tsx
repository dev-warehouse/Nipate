import {DOMAttributes} from "react";
import {AuthProvider} from "./auth";

function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <AuthProvider>
            {props.children}
        </AuthProvider>
    </>
}

export {GlobalProviders}