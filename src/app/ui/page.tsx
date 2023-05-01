"use client";

import WithWrapper from "@/components/HOC/WithWrapper";
import CategoryTile from "@/components/elements/CategoryTile";
import Typography from "@/components/elements/Typography";

import ButtonSvg from "@/assets/svg/categories/UI/button.svg";
import CheckboxSvg from "@/assets/svg/categories/UI/checkbox.svg";
import InputSvg from "@/assets/svg/categories/UI/input.svg";
import FaqSvg from "@/assets/svg/categories/UI/faq.svg";
import ToggleSvg from "@/assets/svg/categories/UI/toggle.svg";

const categories = [
  {id: 111, Icon: ButtonSvg, title: "Button", info: "Lorem ipsum", href: "/ui/button"},
  {id: 112, Icon: InputSvg, title: "Input", info: "Lorem ipsum", href: "/ui/input"},
  {id: 113, Icon: ToggleSvg, title: "Toggle", info: "Lorem ipsum", href: "/ui/toggle"},
  {id: 114, Icon: CheckboxSvg, title: "Checkbox", info: "Lorem ipsum", href: "/ui/checkbox"},
  {id: 115, Icon: FaqSvg, title: "Faq", info: "Lorem ipsum", href: "/ui/faq"},
];

const UIPage = () => {
  return (
    <>
      <div className="w-full max-w-5xl">
        <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
          User Interface
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

export default WithWrapper(UIPage);
