import {Portal} from "@mui/base";
import {Notification} from '@core/context'
import {Snackbar} from "./snackbar";
import {Toast} from "./toast";
import {useNotification} from "@core/hooks";

function NotificationItem({type, props}: Notification) {
    return type === 'toast' ? <Toast {...props}/> : type === 'snackbar' ? <Snackbar {...props}/> : <></>
}

function NotificationList() {
    const {alerts} = useNotification()

    return <div>
        {
            alerts.map(({id, type, props}) => {
                return <NotificationItem id={id} type={type} props={props}/>
            })
        }
    </div>
}

export function NotificationFrame() {
    return <Portal>
        <NotificationList/>
    </Portal>
}

export * from './toast'
export * from './snackbar'