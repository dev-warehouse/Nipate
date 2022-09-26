import {DOMAttributes} from "react";
import {AuthProvider, AxiosProvider, NotificationProvider} from ".";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/context";
import {NotificationFrame} from "@components/notification";


function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <AxiosProvider>
            <QueryClientProvider client={queryClient}>
                <NotificationProvider>
                    <AuthProvider>
                        {props.children}
                    </AuthProvider>
                    <NotificationFrame/>
                </NotificationProvider>
            </QueryClientProvider>
        </AxiosProvider>
    </>
}

export {GlobalProviders}