import classNames from "classnames";
import { Size } from "../types/size.type";
import { TextboxProps } from "./textbox.types";

const sizeClasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};
const TextBox = ({
  variant = "ghost",
  type = "text",
  className,
  size = "normal",
  ...rest
}: TextboxProps) => {
  const classes = classNames(
    "textbox",
    "w-full",
    className,
    { [`textbox-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return <input type={type} className={classes} {...rest} />;
};

export default TextBox;
