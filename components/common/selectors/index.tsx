import {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import styles from "./index.module.scss";
import {OptionUnstyled, OptionUnstyledProps, SelectUnstyled, SelectUnstyledProps,} from "@mui/base";

/**
 * Custom styled checkbox input
 * @param props
 * @constructor
 */
const CheckBox = forwardRef((props: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<any>) => <input
    type="checkbox"
    className={styles.checkbox} ref={ref} {...props} />);

/**
 * Custom styled radio input
 * @param props
 * @constructor
 */
const Radio = forwardRef(
    (props: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<any>) =>
        <input type="radio" className={styles.radio} ref={ref} {...props} />
);

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
const Select = forwardRef(({
                               className = '',
                               listStyles = '',
                               dataValidity,
                               ...props
                           }: SelectProps, ref: ForwardedRef<any>) => (
    <SelectUnstyled
        data-validity={dataValidity}
        ref={ref}
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
));

const Option = forwardRef(({className, ...props}: OptionUnstyledProps<any>, ref: ForwardedRef<any>) => (
    <OptionUnstyled
        className={[className, styles.option].join(" ")}
        ref={ref}
        {...props}
    />
))

export {CheckBox, Radio, Select, Option};
