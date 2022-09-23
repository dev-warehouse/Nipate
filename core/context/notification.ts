import {createContext} from "react";
import {SnackbarProps, ToastProps} from "@components/notification";

export type Status = "warning" | "error" | "info" | "success" | "notification";


export interface Notification {
    id: string
    type: "toast" | "snackbar";
    props: ToastProps | SnackbarProps;
}

export interface NotificationState {
    alerts: Notification[];
}

export interface NotificationAction {
    /**
     * Used to add a notification to notification system
     * @param notification
     */
    alert: (alerts: Notification[]) => void;
    /**
     * Dismisses a given notification
     * @param id
     */
    dismissAlert: (id: string) => void;
}

export const notificationContext = createContext<NotificationState & NotificationAction>({} as NotificationState & NotificationAction)
