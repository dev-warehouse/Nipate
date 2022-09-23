import {ReactNode} from "react";
import {Status} from "@core/context";
import styles from "./styles/toast.module.scss";
import {IoMdClose} from "react-icons/io";
import {RiBellLine} from "react-icons/ri";

export interface ToastProps {
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

export function Toast({
                          message,
                          status = "notification",
                          icon,
                          dismissible = true,
                          position = "bottom",
                      }: ToastProps) {
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
                <div className={styles.close}>
                    <IoMdClose/>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
