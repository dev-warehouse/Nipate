import {ReactNode} from "react";
import {Status} from "@core/context";
import styles from "./styles/toast.module.scss";
import {IoMdClose} from "react-icons/io";
import {RiBellLine} from "react-icons/ri";
import {useNotification} from "@core/hooks";

export interface ToastProps {
    id: string,
    message: string;
    status?: Status;
    // For custom notification error
    icon?: ReactNode;
    // Has close button
    dismissible?: boolean;
    shouldTimeout?: boolean
    // Timeout in ms
    timeout?: number
    position?:
        | "top"
        | "top-right"
        | "top-left"
        | "bottom"
        | "bottom-right"
        | "bottom-left";
}

export function Toast({
                          id,
                          message,
                          status = "notification",
                          icon,
                          dismissible = true,
                          shouldTimeout = true,
                          timeout = 2000,
                          position = "bottom",
                      }: ToastProps) {

    const {dismissAlert} = useNotification()

    // Automatically dismiss
    if (shouldTimeout) {
        setTimeout(() => dismissAlert(id), timeout)
    }

    return (
        <div
            className={[styles.root].join()}
            data-position={position}
            data-status={status}
        >
            <div className={styles.icon} data-status={status}>
                <main>{icon ? icon : <RiBellLine/>}</main>
            </div>
            <span>{message}</span>
            {dismissible ? (
                <div className={styles.close} onClick={() => dismissAlert(id)}>
                    <IoMdClose/>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
