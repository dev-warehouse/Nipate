import {createContext, ReactNode} from "react";

export type Status = "warning" | "error" | "info" | "success" | "notification";

export interface Toast {
    message: string;
    status?: Status;
    // For custom notification error
    icon?: ReactNode;
    // Has close button
    dismissible?: boolean;
    position?:
        | "top"
        | "top-right"
        | "top-left"
        | "bottom"
        | "bottom-right"
        | "bottom-left";
}

export interface Snackbar {
    message: string;
    // For custom notification error
    icon?: ReactNode;
    action?: ReactNode;
}

export interface Notification {
    type: "toast" | "snackbar";
    props: Toast | Snackbar;
}

export interface NotificationState {
    alert: Notification[];
}

export interface NotificationAction {
    /**
     * Used to add a notification to notification system
     * @param notification
     */
    alert: (alerts: Notification | Notification[]) => void;
    /**
     * Dismisses a given notification
     * @param id
     */
    dismissAlert: (id: string) => void;
}

export const notificationContext = createContext<NotificationState & NotificationAction>({} as NotificationState & NotificationAction)
