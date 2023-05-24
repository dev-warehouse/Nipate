import {authContext, AuthLifecycleActions, AuthLifecycleData} from "@core/context";
import {useContext} from "react";

/**
 * This is the hook that enables the use of the `AuthProvider`.
 *
 * It has inbuilt checks for whether the hook is used under the provider to prevent
 * undefined / unresolved data. It barrels the hook limit access to the context variable
 */
function useAuth(): AuthLifecycleData & AuthLifecycleActions {
    return useContext(authContext)
}

export {useAuth}