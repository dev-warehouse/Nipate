import {ReactNode} from "react";


export interface SnackbarProps {
    message: string;
    // For custom notification error
    icon?: ReactNode;
    action?: ReactNode;
}

export function Snackbar(props: SnackbarProps) {
    return <></>
}