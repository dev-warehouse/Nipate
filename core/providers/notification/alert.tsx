import {DOMAttributes, Reducer, useReducer} from "react";
import {AlertNotification, alertNotificationContext} from "@core/context";

type Action = { type: 'alert', data: AlertNotification[] } | { type: 'dismiss', data: string }

interface DispatchReducer extends Reducer<AlertNotification[], Action> {

}

function reducer(prevState: AlertNotification[], action: Action) {
    switch (action.type) {
        case "alert":
            return [...prevState, ...action.data]
        case "dismiss":
            const index = prevState.findIndex((val) => val.id === action.data)
            return prevState.splice(index, 1)
    }
}

export function AlertNotificationProvider({children, ...props}: DOMAttributes<any>) {

    const [state, dispatch] = useReducer<DispatchReducer>(reducer, [])

    const alert = (alerts: AlertNotification[]) => {
        dispatch({type: 'alert', data: alerts})
    }
    const dismissAlert = (id: string) => {
        dispatch({type: 'dismiss', data: id})
    }

    return <alertNotificationContext.Provider value={{
        alerts: state,
        alert: alert,
        dismissAlert: dismissAlert
    }} {...props}>{children}</alertNotificationContext.Provider>
}
