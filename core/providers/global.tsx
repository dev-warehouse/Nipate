import {DOMAttributes} from "react";
import {AuthProvider} from "./auth";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/context";


function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                {props.children}
            </AuthProvider>
        </QueryClientProvider>
    </>
}

export {GlobalProviders}