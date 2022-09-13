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

/**
 * Select Input but with styles
 * @param props
 * @constructor
 */
function Select<SValue>(props: SelectUnstyledProps<SValue>) {
    return (
        <SelectUnstyled
            {...props}
            componentsProps={{
                root: {
                    className: styles.select_root,
                },
                listbox: {
                    className: styles.select_listbox,
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
