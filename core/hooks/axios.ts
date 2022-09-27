import {useContext} from "react";
import {AxiosContext} from "@core/context";

export function useAxios() {
    return useContext(AxiosContext)
}
