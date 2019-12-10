import * as React from "react";
import { ElegantHeadingProps } from "../index";

export const ElegantHeading: React.FC<ElegantHeadingProps> = ({
  className,
  children
}) => {
  return <div className={className}>{children}</div>;
};
