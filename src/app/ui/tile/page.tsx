"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import UserSvg from "@/assets/user.svg";
import Tile from "@/components/elements/buttons/Tile";

function Page() {
  return (
    <div className="w-full">
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Tiles
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Color on hover
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover">Default</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="green">Green</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="blue">Blue</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="orange">Orange</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="purple">Purple</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="yellow">Yellow</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="hover" color="red">Red</Tile>
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Colored
        </Typography>
        <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color">Default</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="green">Green</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="blue">Blue</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="orange">Orange</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="purple">Purple</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="yellow">Yellow</Tile>
          <Tile icon={<UserSvg className="w-10 h-10" />} variant="color" color="red">Red</Tile>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
