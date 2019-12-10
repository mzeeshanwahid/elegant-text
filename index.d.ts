import * as React from "react";

export interface ElegantHeadingProps extends React.Props<ElegantHeading> {
  className: string;
  children: React.ReactNode;
}

declare class ElegantHeading extends React.Component<
  ElegantHeadingProps,
  any
> {}

declare module "elegant-heading" {}

export default ElegantHeading;
