import React, {FC, HTMLAttributes} from "react";
import {cva} from "class-variance-authority";
import {gridRowsTW, gridColsTW, directionTW, alignItemsTW, justifyContentTW, gapTW, spaceXTW, spaceYTW} from "@/utils/variantsTW";
import {containerVariants} from "@/utils/variants";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  cols?: keyof typeof gridColsTW;
  rows?: keyof typeof gridRowsTW;
  gap?: keyof typeof gapTW;
  alignItems?: keyof typeof alignItemsTW;
  justifyContent?: keyof typeof justifyContentTW;
  spaceX?: keyof typeof spaceXTW;
  spaceY?: keyof typeof spaceYTW;
  spacing?: string;
}

const Grid: FC<GridProps> = ({variant, cols, rows, gap, alignItems, justifyContent, spaceX, spaceY, spacing, children, className, ...props}) => {
  const Component = variant ? containerVariants[variant] : "div";
  const classes = cva([className, "grid"], {
    variants: {
      cols: gridColsTW,
      rows: gridRowsTW,
      alignItems: alignItemsTW,
      justifyContent: justifyContentTW,
      gap: gapTW,
      spaceX: spaceXTW,
      spaceY: spaceYTW,
    },
  });
  return React.createElement(Component, {className: classes({alignItems, justifyContent, cols, rows, gap, spaceX, spaceY}), ...props}, children);
};

export default Grid;
