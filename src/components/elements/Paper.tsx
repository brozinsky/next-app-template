import React, {ReactNode} from "react";
import {cva} from "class-variance-authority";
import type {VariantProps} from "class-variance-authority";

const classes = cva([""], {
  variants: {
    elevation: {
      0: "bg-dark-900",
      1: "bg-dark-800",
      2: "bg-dark-700",
      3: "bg-dark-600",
      4: "bg-dark-500",
      6: "bg-dark-400",
      8: "bg-dark-300",
      12: "bg-dark-200",
      24: "bg-dark-100",
      48: "bg-dark-50",
    },
    stroke: {
      true: "border border-dark-50",
    },
    rounded: {
      default: "rounded-lg",
      none: "",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    elevation: 1,
    stroke: true,
    rounded: "default",
  },
});

export interface PaperProps extends VariantProps<typeof classes> {
  className: string;
  children: ReactNode;
}

const Paper = ({className = "flex flex-col p-10", stroke = false, elevation, rounded, children, ...props}: PaperProps) => {
  return (
    <div className={classes({className, stroke, elevation, rounded})} {...props}>
      {children}
    </div>
  );
};

export default Paper;
