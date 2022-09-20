import {InputHTMLAttributes} from "react";
import styles from "./index.module.scss";
import {OptionUnstyled, OptionUnstyledProps, SelectUnstyled, SelectUnstyledProps,} from "@mui/base";

/**
 * Custom styled checkbox input
 * @param props
 * @constructor
 */
function CheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input type="checkbox" className={styles.checkbox} {...props} />;
}

/**
 * Custom styled radio input
 * @param props
 * @constructor
 */
function Radio(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input type="radio" className={styles.radio} {...props} />;
}

export interface SelectProps extends SelectUnstyledProps<any> {
    dataValidity?: 'initial' | 'success' | 'error'
    listStyles?: string
}

/**
 * Select Input but with styles
 * @param dataValidity
 * @param props
 * @param className Customizes select button
 * @param listStyles Customizes select listbox
 * @constructor
 */
function Select({className = '', listStyles = '', dataValidity, ...props}: SelectProps) {
    return (
        <SelectUnstyled
            data-validity={dataValidity}
            {...props}
            componentsProps={{
                root: {
                    className: [className, styles.select_root].join(' '),
                },
                listbox: {
                    className: [listStyles, styles.select_listbox].join(' '),
                },
                popper: {
                    className: styles.select_popper,
                },
            }}
        />
    );
}

function Option<OValue>({className, ...props}: OptionUnstyledProps<OValue>) {
    return (
        <OptionUnstyled
            className={[className, styles.option].join(" ")}
            {...props}
        />
    );
}

export {CheckBox, Radio, Select, Option};
