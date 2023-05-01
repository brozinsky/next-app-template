import React, {ReactNode} from "react";
import {cva} from "class-variance-authority";
import type {VariantProps} from "class-variance-authority";

const classes = cva(["backdrop-filter"], {
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
      md: "rounded-md",
      none: "",
      full: "rounded-full",
    },
    blur: {
      none: "backdrop-blur-none",
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
      "2xl": "backdrop-blur-2xl",
      "3xl": "backdrop-blur-3xl",
    },
    opacity: {
      10: "bg-opacity-10",
      20: "bg-opacity-20",
      30: "bg-opacity-30",
      40: "bg-opacity-40",
      50: "bg-opacity-50",
      60: "bg-opacity-60",
      70: "bg-opacity-70",
      80: "bg-opacity-80",
      90: "bg-opacity-90",
    },
  },
  defaultVariants: {
    elevation: 1,
    rounded: "default",
    blur: "md",
    opacity: 50,
  },
});

export interface GlassProps extends VariantProps<typeof classes> {
  className: string;
  children: ReactNode;
}

const Glass = ({className = "flex flex-col p-10", stroke, elevation, blur, opacity, children, ...props}: GlassProps) => {
  return (
    <div className={classes({stroke, elevation, blur, opacity})} {...props}>
      {children}
    </div>
  );
};

export default Glass;
