"use client";
import WithWrapper from "@/components/HOC/WithWrapper";
import Typography from "@/elements/Typography";
import Button from "@/elements/buttons/Button";
import ButtonIcon from "@/elements/buttons/ButtonIcon";
import UserSvg from "@/assets/user.svg";

const Icon = () => {
  return (
    <svg className="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  );
};

function Page() {
  return (
    <div className="w-full max-w-5xl">
      <Typography variant="h1" size="h3" decoration="lineBot" className={"font-medium mb-8"}>
        Buttons
      </Typography>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Variants
        </Typography>
        <div className="flex items-center gap-4">
          <Button label="Button" variant="primary" />
          <Button label="Button" variant="shine" />
          <Button label="Button" variant="mono" />
          <Button label="Button" variant="danger" />
          <Button label="Button" variant="neon" />
          <Button label="Button" variant="outlined" />
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          States
        </Typography>
        WIP...
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Sizes
        </Typography>
        <div className="flex items-center gap-4">
          <Button size={"default"} label="Button" variant="primary" />
          <Button size={"lg"} label="Button" variant="primary" />
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Rounded
        </Typography>
        <div className="flex items-center gap-4">
          <Button rounded={"default"} label="Button" />
          <Button rounded={"none"} label="Button" />
          <Button rounded={"full"} label="Button" />
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Button with icon
        </Typography>
        <div className="flex items-center gap-4">
          <Button startIcon={<Icon />} label="Button" />
          <Button endIcon={<Icon />} label="Button" />
        </div>
      </div>
      <div className="mt-10">
        <Typography variant="h2" size="h5" decoration="none" className={"mb-4"}>
          Icon buttons
        </Typography>
        <div className="flex items-center gap-4">
          <ButtonIcon icon={<Icon />} />
          <ButtonIcon size={"sm"} rounded={"lg"} color={"gray"} variant={"secondary"} icon={<Icon />} />
          <ButtonIcon size={"sm"} color={"transparent"} variant={"secondary"} icon={<Icon />} />
        </div>
      </div>
      <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
        <div className="tile-button">
          <UserSvg className="w-10 h-10"/>
          <div>Default</div>
        </div>
        <div className="tile-button tile-button--hovered green">
          <UserSvg className="w-10 h-10"/>
          <div>Green</div>
        </div>
        <div className="tile-button tile-button--hovered blue">
          <UserSvg className="w-10 h-10"/>
          <div>Blue</div>
        </div>
        <div className="tile-button tile-button--hovered orange">
          <UserSvg className="w-10 h-10"/>
          <div>Orange</div>
        </div>
        <div className="tile-button tile-button--hovered purple">
          <UserSvg className="w-10 h-10"/>
          <div>Purple</div>
        </div>
        <div className="tile-button tile-button--hovered yellow">
          <UserSvg className="w-10 h-10"/>
          <div>Yellow</div>
        </div>
        <div className="tile-button tile-button--hovered red">
          <UserSvg className="w-10 h-10"/>
          <div>Red</div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full max-w-5xl flex-wrap gap-4">
        <div className="tile-button">
          <UserSvg className="w-10 h-10"/>
          <div>Default</div>
        </div>
        <div className="tile-button tile-button--color green">
          <UserSvg className="w-10 h-10"/>
          <div>Green</div>
        </div>
        <div className="tile-button tile-button--color blue">
          <UserSvg className="w-10 h-10"/>
          <div>Blue</div>
        </div>
        <div className="tile-button tile-button--color orange">
          <UserSvg className="w-10 h-10"/>
          <div>Orange</div>
        </div>
        <div className="tile-button tile-button--color purple">
          <UserSvg className="w-10 h-10"/>
          <div>Purple</div>
        </div>
        <div className="tile-button tile-button--color yellow">
          <UserSvg className="w-10 h-10"/>
          <div>Yellow</div>
        </div>
        <div className="tile-button tile-button--color red">
          <UserSvg className="w-10 h-10"/>
          <div>Red</div>
        </div>
      </div>
    </div>
  );
}

export default WithWrapper(Page);
