import {DOMAttributes} from "react";
import {AlertNotificationProvider, AuthProvider, AxiosProvider} from ".";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@core/context";
import {AlertNotificationContainer} from "@components/notification";


function GlobalProviders(props: DOMAttributes<any>) {
    return <>
        <AlertNotificationProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <AxiosProvider>
                        {props.children}
                    </AxiosProvider>
                </AuthProvider>
                <AlertNotificationContainer/>
            </QueryClientProvider>
        </AlertNotificationProvider>
    </>
}

export {GlobalProviders}