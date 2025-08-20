import React from "react";
import { LoadingProps } from "./loading.types";
import classNames from "classnames";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};
const Loading = ({
  className,
  type = "spinner",
  size = "normal",
  variant,
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );

  return <span className={classes}></span>;
};

export default Loading;
