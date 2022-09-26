import {PropsWithChildren, useMemo} from "react";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {AxiosContext, axiosInstance} from "@core/context";
import {useAuth} from "../hooks";

export function AxiosProvider({children}: PropsWithChildren<any>) {
    const axios: AxiosInstance = useMemo(() => {
        axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            // Read token for anywhere, in this case directly from localStorage
            const {authToken: token} = useAuth()
            if (token) {
                config.headers = {
                    Authorization: `Token ${token?.replace(/(^["']|["']$)/g, '')}`,
                }
            }

            return config
        })

        return axiosInstance
    }, [])

    return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
}
