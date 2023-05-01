import React, {SVGProps, FC} from "react";
import Paper from "@/components/elements/Paper";
import Typography from "@/components/elements/Typography";
import Link from "next/link";
import Image from "next/image";

interface CategoryTileProps {
  title: string;
  image?: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  info?: string;
  href: string;
}

const CategoryTile: FC<CategoryTileProps> = ({title, image, Icon, info, href}) => {
  return (
    <Link href={href} className="category-tile">
      <div className="w-full">
        <div className={`${Icon ? "category-tile__icon" : "category-tile__image"}`}>
          {image ? <Image width={240} height={190} src={image} alt={title} /> : null}
          {Icon && <Icon />}
        </div>
        <Paper rounded={"none"} elevation={1} className={"text-slate-100 category-tile__info"}>
          <Typography variant="h3" size="h6" decoration="none" className={"font-bold"}>
            {title}
          </Typography>
          {info ? (
            <Typography size="sm" decoration="none" className={"text-slate-300"}>
              {info}
            </Typography>
          ) : null}
        </Paper>
      </div>
    </Link>
  );
};

export default CategoryTile;
