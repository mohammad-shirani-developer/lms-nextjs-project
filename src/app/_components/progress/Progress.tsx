import classNames from "classnames";
import { Size } from "../types/size.type";
import { ProgressProps } from "./progress.types";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

const Progress = ({
  variant = "neutral",
  className,
  size = "small",
  value,
}: ProgressProps) => {
  const classes = classNames("progress", className, {
    [sizeClasses[size]]: size,
    [`progress-${variant}`]: variant,
  });
  return <progress className={classes} value={value} max="100" />;
};

export default Progress;
