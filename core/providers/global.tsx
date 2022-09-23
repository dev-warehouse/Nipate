import {DOMAttributes} from "react";
import {AuthProvider, NotificationProvider} from ".";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/context";


function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <QueryClientProvider client={queryClient}>
            <NotificationProvider>
                <AuthProvider>
                    {props.children}
                </AuthProvider>
            </NotificationProvider>
        </QueryClientProvider>
    </>
}

export {GlobalProviders}