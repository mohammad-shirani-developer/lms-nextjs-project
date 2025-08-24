import classNames from "classnames";
import { IconInfo } from "../icons/icons";
import { AlertProps } from "./alert.type";

const Alert = ({
  variant,
  className,
  showIcon = true,
  children,
}: AlertProps) => {
  const classes = classNames(
    "alert",
    { [`alert-${variant}`]: variant },
    className
  );

  return (
    <div className={classes}>
      {showIcon && <IconInfo width={18} />}
      {children}
    </div>
  );
};

export default Alert;
