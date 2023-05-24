import {PropsWithChildren, useMemo} from "react";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {AxiosContext, axiosInstance} from "@core/context";
import {useAuth} from "../hooks";

export function AxiosProvider({children}: PropsWithChildren<any>) {

    const {authToken} = useAuth()

    const axios: AxiosInstance = useMemo(() => {
        axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            // Read token for anywhere, in this case directly from localStorage
            if (authToken) {
                config.headers = {
                    Authorization: `${authToken?.replace(/(^["']|["']$)/g, '')}`,
                }
            }

            return config
        })

        return axiosInstance
    }, [authToken])

    return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
}
