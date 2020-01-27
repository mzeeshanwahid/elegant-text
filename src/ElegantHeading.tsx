import * as React from "react";

export interface ElegantHeadingProps{
  className?: string;
  children: React.ReactNode;
}

export const ElegantHeading: React.FC<ElegantHeadingProps> = ({
  className,
  children
}) => {
  return <div className={className}>{children}</div>;
};

export default ElegantHeading;