import {ComponentProps} from "react";
import Link from "next/link";

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface Props extends ButtonOrLinkProps {}

export const ButtonOrLink = ({href, ...props}: Props) => {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "span" : "button";

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link className="flex w-fit h-fit" href={href}>
        {content}
      </Link>
    );
  }

  return content;
};
