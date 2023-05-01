import React, {ReactNode} from "react";
import classNames from "clsx";
import {containerVariants} from "@/utils/variants";

type ContainerProps = {
  variant?: keyof typeof containerVariants;
  children?: ReactNode;
  className?: string;
  noMargin?: boolean;
};

const Container = ({variant, children, className, noMargin, ...props}: ContainerProps) => {
  const Component = variant ? containerVariants[variant] : "div";

  return React.createElement(Component, {className: classNames("container", noMargin ? "" : "mx-auto", className), ...props}, children);
};

export default Container;
