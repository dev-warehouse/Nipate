import {ReactNode} from "react";
import {Status} from "@core/context";

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

export function Toast(props: ToastProps) {
    return <></>
}