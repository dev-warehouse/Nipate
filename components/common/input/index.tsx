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
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
const Input = forwardRef(
  (
    {
      dataValidity,
      className,
      componentsProps,
      ...props
    }: InputProps & InputUnstyledProps,
    ref: ForwardedRef<any>
  ) => {
    const [visible, setVisible] = useState<boolean>(false);
    const End = (): JSX.Element | null => {
      if (props.type === "password") {
        return (
          <div className={styles.icon} onClick={() => setVisible(!visible)}>
            {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        );
      }
      return null;
    };
    inputUnstyledClasses.focused = styles.root_focused;
    return (
      <InputUnstyled
        endAdornment={<End />}
        data-validity={dataValidity}
        componentsProps={{
          root: componentsProps?.root,
          input: {
            ...componentsProps?.input,
            type: props.type === "password" ? (visible ? "text" : "password") : props.type,
          },
        }}
        className={[className, styles.root].join(" ")}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Input };
export * from "./form";
export type { InputProps };
