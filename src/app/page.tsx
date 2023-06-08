"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import AudioSvg from "@/assets/svg/categories/audio.svg";
import CategoryTile from "@/components/elements/CategoryTile";
import EcommerceSvg from "@/assets/svg/categories/ecommerce.svg";
import LayoutSvg from "@/assets/svg/categories/layout.svg";
import ProfileSvg from "@/assets/svg/categories/profile.svg";
import Typography from "@/components/elements/Typography";
import UiSvg from "@/assets/svg/categories/ui.svg";

const categories = [
  {id: 111, Icon: UiSvg, title: "UI", info: "Lorem ipsum", href: "/ui"},
  {id: 112, Icon: LayoutSvg, title: "Layout", info: "Lorem ipsum", href: "/layout"},
  {id: 113, Icon: EcommerceSvg, title: "E-commerce", info: "Lorem ipsum", href: "/ecommerce"},
  {id: 114, Icon: ProfileSvg, title: "Profile", info: "Lorem ipsum", href: "/profile"},
  {id: 115, Icon: AudioSvg, title: "Audio", info: "Lorem ipsum", href: "/audio"},
];

const Home = () => {
  return (
    <div className="w-full max-w-5xl space-y-8">
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Dashboard
      </Typography>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between w-full max-w-5xl gap-4">
        {categories.map(({id, Icon, title, info, href}) => {
          return <CategoryTile key={id} Icon={Icon} title={title} info={info} href={href} />;
        })}
      </div>
    </div>
  );
};

export default WithWrapper(Home);
