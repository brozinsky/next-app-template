"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";
import Typography from "@/components/elements/Typography";

import CategorySvg from "@/assets/svg/categories/layout/category.svg";
import FlexSvg from "@/assets/svg/categories/layout/flex.svg";
import GridSvg from "@/assets/svg/categories/layout/grid.svg";
import TypographySvg from "@/assets/svg/categories/layout/typography.svg";

const categories = [
  {id: 111, Icon: TypographySvg, title: "Typography", info: "Lorem ipsum", href: "/layout/typography"},
  {id: 112, Icon: FlexSvg, title: "Flexbox", info: "Lorem ipsum", href: "/layout/flex"},
  {id: 112, Icon: GridSvg, title: "Grid", info: "Lorem ipsum", href: "/layout/grid"},
  {id: 114, Icon: CategorySvg, title: "Categories", info: "Lorem ipsum", href: "/layout/categories"},
];

const LayoutPage = () => {
  return (
    <>
      <div className="w-full max-w-5xl">
        <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
          Layout
        </Typography>
        <div className="flex flex-row justify-between w-full h-full max-w-5xl space-x-4">
          {categories.map(({id, Icon, title, info, href}) => {
            return <CategoryTile key={id} Icon={Icon} title={title} info={info} href={href} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WithWrapper(LayoutPage);
