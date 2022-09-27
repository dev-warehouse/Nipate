import {DOMAttributes, Reducer, useReducer} from "react";
import {Notification, notificationContext} from "@core/context";

type Action = { type: 'alert', data: Notification[] } | { type: 'dismiss', data: string }

interface DispatchReducer extends Reducer<Notification[], Action> {

}

function reducer(prevState: Notification[], action: Action) {
    switch (action.type) {
        case "alert":
            return [...prevState, ...action.data]
        case "dismiss":
            const index = prevState.findIndex((val) => val.id === action.data)
            return prevState.splice(index, 1)
    }
}

export function NotificationProvider({children, ...props}: DOMAttributes<any>) {

    const [state, dispatch] = useReducer<DispatchReducer>(reducer, [])

    const alert = (alerts: Notification[]) => {
        dispatch({type: 'alert', data: alerts})
    }
    const dismissAlert = (id: string) => {
        dispatch({type: 'dismiss', data: id})
    }

    return <notificationContext.Provider value={{
        alerts: state,
        alert: alert,
        dismissAlert: dismissAlert
    }} {...props}>{children}</notificationContext.Provider>
}
