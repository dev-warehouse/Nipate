import {QueryClient} from "@tanstack/react-query";
import {BASE_URL, LOCAL_BASE_URL} from "@core/api";

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            networkMode: BASE_URL === LOCAL_BASE_URL ? 'always' : 'online',
        }
    }
})
