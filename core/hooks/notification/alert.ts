import {useContext} from "react";
import {AlertNotificationAction, alertNotificationContext, AlertNotificationState} from "@core/context";

export function useAlertNotification(): AlertNotificationAction & AlertNotificationState {
    return useContext(alertNotificationContext)
}