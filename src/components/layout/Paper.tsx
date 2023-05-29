import React, {ReactNode} from "react";
import {cva} from "class-variance-authority";
import type {VariantProps} from "class-variance-authority";

const classes = cva([""], {
  variants: {
    elevation: {
      0: "bg-elevation-900",
      1: "bg-elevation-800",
      2: "bg-elevation-700",
      3: "bg-elevation-600",
      4: "bg-elevation-500",
      6: "bg-elevation-400",
      8: "bg-elevation-300",
      12: "bg-elevation-200",
      24: "bg-elevation-100",
      48: "bg-elevation-50",
    },
    stroke: {
      true: "border border-dark-50",
    },
    rounded: {
      default: "rounded-xl",
      none: "",
      full: "rounded-full",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    elevation: 1,
    stroke: true,
    rounded: "default",
  },
});

export interface PaperProps extends VariantProps<typeof classes> {
  className?: string;
  children?: ReactNode;
}

const Paper = ({className = "flex flex-col p-10", stroke = false, elevation = 1, rounded = "default", children, ...props}: PaperProps) => {
  return (
    <div className={classes({className:className, stroke, elevation, rounded})} {...props}>
      {children}
    </div>
  );
};

export default Paper;
