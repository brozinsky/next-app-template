"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";
import Typography from "@/components/elements/Typography";
import Dropdown from "@/components/elements/form/Dropdown";
import Select from "@/components/elements/form/Select";

import CategorySvg from "@/assets/svg/categories/layout/category.svg";
import FlexSvg from "@/assets/svg/categories/layout/flex.svg";
import GridSvg from "@/assets/svg/categories/layout/grid.svg";
import TypographySvg from "@/assets/svg/categories/layout/typography.svg";

const categories = [
  {id: 111, Icon: TypographySvg, title: "Typography", info: "Layout", href: "/layout/typography"},
  {id: 112, Icon: FlexSvg, title: "Paper", info: "Layout", href: "/layout/paper"},
  {id: 113, Icon: FlexSvg, title: "Glass", info: "Layout", href: "/layout/glass"},
  {id: 114, Icon: GridSvg, title: "Flexbox", info: "Layout", href: "/layout/flex"},
  {id: 115, Icon: GridSvg, title: "Grid", info: "Layout", href: "/layout/grid"},
  {id: 116, Icon: CategorySvg, title: "Categories", info: "Layout", href: "/layout/categories"},
];

const optionsKey = [
  {id: 111, name: "C", value: "c"},
  {id: 112, name: "C#", value: "cs"},
  {id: 113, name: "D", value: "d"},
  {id: 114, name: "D#", value: "ds"},
  {id: 114, name: "E", value: "e"},
];

const optionsScale = [
  {id: 111, name: "Major", value: "221222"},
  {id: 112, name: "Natural Minor", value: "212212"},
  {id: 113, name: "Harmonic Minor", value: "212212"},
  {id: 114, name: "Melodic Minor", value: "212222"},
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
        <Dropdown />
        <Select options={optionsKey} />
        <Select options={optionsScale} />
      </div>
    </>
  );
};

export default WithWrapper(LayoutPage);
