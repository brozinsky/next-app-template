import {cva, VariantProps} from "class-variance-authority";
import React, {ReactNode, MouseEvent} from "react";

const tileClasses = cva("tile-button", {
  variants: {
    variant: {
      default: "",
      hover: "tile-button--hovered",
      color: "tile-button--color",
    },
    color: {
        default: "",
        red: "red",
        green: "green",
        blue: "blue",
        purple: "purple",
        yellow: "yellow",
        orange: "orange",
    }
  },
});

interface Props extends VariantProps<typeof tileClasses> {
  icon: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void | undefined;
}

const Tile = ({onClick, children, icon, variant = "default", color = "default"}: Props) => {
  return (
    <button onClick={onClick} className={tileClasses({variant, color})}>
      {icon}
      <div>{children}</div>
    </button>
  );
};

export default Tile;
