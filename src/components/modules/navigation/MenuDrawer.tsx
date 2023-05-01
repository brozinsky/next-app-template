import React from "react";
import ButtonIcon from "@/elements/buttons/ButtonIcon";
import {cva} from "class-variance-authority";
import useToggle from "@/hooks/useToggle";
import MenuDrawerItem from "@/modules/navigation/MenuDrawerItem";

// import {ReactComponent as EmptySvg} from "@/assets/empty.svg";
import DashboardSvg from "@/assets/dashboard.svg";
import EcommerceSvg from "@/assets/ecommerce.svg";
import ComponentsSvg from "@/assets/components.svg";
import LayoutSvg from "@/assets/layout.svg";
import UserSvg from "@/assets/user.svg";
import CollapseSvg from "@/assets/menu-collapse.svg";
import ExpandSvg from "@/assets/menu-expand.svg";
import AudioSvg from "@/assets/audio.svg";

import type {VariantProps} from "class-variance-authority";

const navItems = [
  {id: 0, title: "Dashboard", url: "/", Icon: DashboardSvg},
  {
    id: 1,
    title: "UI",
    Icon: ComponentsSvg,
    url: "",
    list: [
      {id: 10, title: "Button", url: "/components/button"},
      {id: 11, title: "Input", url: "/components/input"},
      {id: 12, title: "Toggle", url: "/components/toggle"},
      {id: 13, title: "Checkbox", url: "/components/checkbox"},
      {id: 14, title: "Faq", url: "/components/faq"},
    ],
  },
  {
    id: 2,
    title: "Layout",
    Icon: LayoutSvg,
    url: "",
    list: [
      {id: 20, title: "Typography", url: "/layout/typography"},
      {id: 21, title: "Flex", url: "/layout/flex"},
      {id: 22, title: "Grid", url: "/layout/grid"},
      {id: 23, title: "Categories", url: "/layout/categories"},
    ],
  },
  {id: 3, title: "E-commerce", url: "/e-commerce", Icon: EcommerceSvg},
  {id: 4, title: "Profile", url: "/profile", Icon: UserSvg},
  {id: 5, title: "Audio", url: "/audio", Icon: AudioSvg},
];

const navClasses = cva(["mt-20 fixed z-40 h-screen overflow-visible bg-white w-80 left-0 top-0", "dark:bg-dark-800", "transition-transform"], {
  variants: {
    isOpen: {
      true: "",
      false: " -translate-x-full",
    },
    isCollapsed: {
      true: "!w-16",
      false: "",
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export interface MenuDrawerProps extends VariantProps<typeof navClasses> {
  isOpen: boolean;
}

const MenuDrawer = ({isOpen}: MenuDrawerProps) => {
  const [isCollapsed, setIsCollapsed] = useToggle(false);

  React.useEffect(() => {
    console.log(isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      <nav className={navClasses({isOpen, isCollapsed})} tabIndex={-1} aria-labelledby="drawer-navigation-label">
        <div className={`flex ${isCollapsed ? "justify-start" : "justify-end"}`}>
          <ButtonIcon size="default" onClick={setIsCollapsed} srOnly={"Close menu"} rounded="lg" color={"transparent"} icon={isCollapsed ? <CollapseSvg /> : <ExpandSvg />} />
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map(({id, url, title, Icon, list}) => {
              return <MenuDrawerItem key={id} id={id} url={url} title={title} Icon={Icon} list={list} isCollapsed={isCollapsed} />;
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MenuDrawer;
