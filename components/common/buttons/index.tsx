import styles from "./index.module.scss";
import { ButtonUnstyled, ButtonUnstyledProps } from "@mui/base";
import { ForwardedRef, forwardRef } from "react";

/**
 * Adds on Html Button Attributes with variant to create custom button element
 */
interface ButtonProps extends ButtonUnstyledProps {
  /**
   * ## Variant of Button, has three variants,
   *
   * `text` - renders text button
   *
   * `outline` - renders button with outline
   *
   * `solid` - renders the default filled button
   */
  variant?: "text" | "outline" | "solid";
}

/**
 * Themed button, extends html button and adds on variants.
 * @param variant
 * @param className
 * @param props
 * @constructor
 */
const Button = forwardRef(
  (
    { variant = "solid", className, ...props }: ButtonProps,
    ref: ForwardedRef<any>
  ) => (
    <ButtonUnstyled
      ref={ref}
      className={[
        className,
        styles.base,
        variant === "text"
          ? styles.text
          : variant == "outline"
          ? styles.outline
          : styles.solid,
      ].join(" ")}
      {...props}
    />
  )
);

export { Button };
export type { ButtonProps };
