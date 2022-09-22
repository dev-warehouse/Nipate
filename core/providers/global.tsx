import {DOMAttributes} from "react";
import {AuthProvider} from "./auth";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()


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