import React, {FC, ReactNode} from "react";
import {cva} from "class-variance-authority";
import {typographyVariants} from "@/utils/variants";

type Props = {
  center?: boolean;
  variant?: keyof typeof typographyVariants;
  decoration?: "lineTop" | "lineBot" | "none";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "sm" | "xs";
  className?: string;
  children: ReactNode;
};

const Typography: FC<Props> = ({center, variant, decoration, size, children, className = "", ...props}) => {
  const Component = variant ? typographyVariants[variant] : "p";

  const classes = cva(["tracking-wide"], {
    variants: {
      size: {
        h1: "text-6xl font-medium",
        h2: "text-5xl font-medium",
        h3: "text-4xl font-medium",
        h4: "text-3xl font-medium",
        h5: "text-2xl font-medium",
        h6: "text-xl font-medium",
        body: "text-base",
        sm: "text-sm",
        xs: "text-xs",
      },
      decoration: {
        lineTop: "flex flex-col gap-2 before:h-[2px] before:w-[100px] flex before:bg-primary-500 before:rounded-full",
        lineBot: "flex flex-col gap-2 after:h-[2px] after:w-[100px] flex after:bg-primary-500 after:rounded-full",
        none: "",
      },
      center: {
        true: "text-center items-center",
      },
    },
  });

  const componentProps = {
    className: classes({size, decoration, center}) + " " + className,
    ...props,
  };

  return React.createElement(Component, componentProps, children);
};

export default Typography;
