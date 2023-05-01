import React, {ReactNode} from "react";
import {cva} from "class-variance-authority";
import {directionTW, alignItemsTW, justifyContentTW, gapTW, spaceXTW, spaceYTW} from "@/utils/variantsTW";
import {containerVariants} from "@/utils/variants";

type FlexProps = {
  variant?: keyof typeof containerVariants;
  direction?: keyof typeof directionTW;
  alignItems?: keyof typeof alignItemsTW;
  justifyContent?: keyof typeof justifyContentTW;
  gap?: keyof typeof gapTW;
  spaceX?: keyof typeof spaceXTW;
  spaceY?: keyof typeof spaceYTW;
  spacing?: keyof typeof spaceXTW;
  children?: ReactNode;
  className?: string;
};

const Flex = ({variant, direction, alignItems, justifyContent, gap, spaceX, spaceY, spacing, children, className, ...props}: FlexProps) => {
  const Component = variant ? containerVariants[variant] : "div";
  const classes = cva([className, "flex"], {
    variants: {
      direction: directionTW,
      alignItems: alignItemsTW,
      justifyContent: justifyContentTW,
      gap: gapTW,
      spaceX: spaceXTW,
      spaceY: spaceYTW,
    },
  });

  return React.createElement(Component, {className: classes({direction, alignItems, justifyContent, gap, spaceX, spaceY}), ...props}, children);
};

export default Flex;
