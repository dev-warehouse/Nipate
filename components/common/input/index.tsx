import styles from "./index.module.scss";
import {
  InputUnstyled,
  inputUnstyledClasses,
  InputUnstyledProps,
} from "@mui/base";
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

/**
 * Extends `InputHtmlAttributes` and adds upon dataValidity for data feedback
 */
interface InputProps {
  /**
   * This is used to show the various feedback states of the data
   */
  dataValidity?: "initial" | "success" | "error";
}


/**
 * Custom Input that extends HtmlInput with custom styles and user feedback
 * @param dataValidity
 * @param className
 * @param props
 * @constructor
 */
const Input = forwardRef(({
                              dataValidity,
                              className,
                              ...props
                          }: InputProps & InputUnstyledProps, ref: ForwardedRef<any>) => {
    inputUnstyledClasses.focused = styles.root_focused;
    return <InputUnstyled data-validity={dataValidity} className={[className, styles.root].join(' ')}
                          ref={ref} {...props}/>
});

export {Input}
export * from './form'
export type {InputProps}