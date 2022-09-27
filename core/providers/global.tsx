import {DOMAttributes} from "react";
import {AuthProvider, AxiosProvider, NotificationProvider} from ".";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/context";
import {NotificationFrame} from "@components/notification";


function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <NotificationProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <AxiosProvider>
                        {props.children}
                    </AxiosProvider>
                </AuthProvider>
                <NotificationFrame/>
            </QueryClientProvider>
        </NotificationProvider>
    </>
}

export {GlobalProviders}