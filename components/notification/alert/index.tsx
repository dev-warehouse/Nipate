import {Portal} from "@mui/base";
import {AlertNotification} from '@core/context'
import {Snackbar} from "./snackbar";
import {Toast} from "./toast";
import {useAlertNotification} from "@core/hooks";

function AlertItem({id, type, props}: AlertNotification) {
    return type === 'toast' ? <Toast id={id} {...props}/> : type === 'snackbar' ? <Snackbar {...props}/> : <></>
}

function AlertList() {
    const {alerts} = useAlertNotification()

    // TODO Add animation on notification enter and exit
    return <div>
        {
            alerts.map(({id, type, props}, index) => {
                return <AlertItem key={index} id={id} type={type} props={props}/>
            })
        }
    </div>
}

export function AlertNotificationContainer() {
    return <Portal>
        <AlertList/>
    </Portal>
}

export * from './toast'
export * from './snackbar'