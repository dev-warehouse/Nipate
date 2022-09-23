import {useContext} from "react";
import {NotificationAction, notificationContext, NotificationState} from "@core/context";

export function useNotification(): NotificationAction & NotificationState {
    return useContext(notificationContext)
}