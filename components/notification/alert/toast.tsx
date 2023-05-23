import {ReactNode} from "react";
import {Status} from "@core/context";
import styles from "./styles/toast.module.scss";
import {IoMdCheckmark, IoMdClose, IoMdWarning} from "react-icons/io";
import {CgBell} from 'react-icons/cg'
import {useAlertNotification} from "@core/hooks";
import {AiOutlineInfo} from "react-icons/ai";

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


// Get the various icons for the toast
function GetIcon({status}: { status: Status }): JSX.Element {
    switch (status) {
        case "notification":
            return <CgBell/>
        case "success":
            return <IoMdCheckmark/>
        case "info":
            return <AiOutlineInfo/>
        case "warning":
            return <IoMdWarning/>
        case "error":
            return <IoMdWarning/>
        default:
            return <CgBell/>
    }
}

export function Toast({
                          id,
                          message,
                          status = "notification",
                          icon,
                          dismissible = true,
                          shouldTimeout = true,
                          timeout = 2000,
                          position = "bottom-right",
                      }: ToastProps) {

    const {dismissAlert} = useAlertNotification()

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
                <main>{icon ? icon : <GetIcon status={status}/>}</main>
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
