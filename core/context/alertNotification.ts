import {createContext} from "react";
import {SnackbarProps, ToastProps} from "@components/notification";

export type Status = "warning" | "error" | "info" | "success" | "notification";


export interface AlertNotification {
    id: string
    type: "toast" | "snackbar";
    props: ToastProps | SnackbarProps;
}

export interface AlertNotificationState {
    alerts: AlertNotification[];
}

export interface AlertNotificationAction {
    /**
     * Used to add a notification to notification system
     * @param notification
     */
    alert: (alerts: AlertNotification[]) => void;
    /**
     * Dismisses a given notification
     * @param id
     */
    dismissAlert: (id: string) => void;
}

export const alertNotificationContext = createContext<AlertNotificationState & AlertNotificationAction>({} as AlertNotificationState & AlertNotificationAction)
