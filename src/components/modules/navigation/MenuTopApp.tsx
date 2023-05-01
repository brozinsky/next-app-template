import Link from "next/link";
import Hamburger from "@/elements/buttons/Hamburger";
import NavLink from "@/elements/buttons/NavLink";
import DarkSwitch from "@/elements/buttons/DarkSwitch";
import ButtonIcon from "@/elements/buttons/ButtonIcon";

const navItems = [
  {name: "Page1", url: "/page-1"},
  {name: "Page2", url: "/page-2"},
  {name: "Page3", url: "/page-3"},
];

const Icon = () => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2C0.447715 2 0 1.55228 0 1V1C0 0.447715 0.447715 0 1 0H16.4912C17.0435 0 17.4912 0.447715 17.4912 1V1C17.4912 1.55228 17.0435 2 16.4912 2H1ZM1 5C0.447715 5 0 5.44772 0 6V6C0 6.55228 0.447715 7 1 7H16.4912C17.0435 7 17.4912 6.55228 17.4912 6V6C17.4912 5.44772 17.0435 5 16.4912 5H1ZM1 10C0.447715 10 0 10.4477 0 11V11C0 11.5523 0.447715 12 1 12H16.4912C17.0435 12 17.4912 11.5523 17.4912 11V11C17.4912 10.4477 17.0435 10 16.4912 10H1Z"
        fill="currentColor"
      />
    </svg>
  );
};

interface MenuTopAppProps {
  isDrawerOpen: boolean;
  toggleDrawer: (isOpen: boolean) => void;
}

const MenuTopApp = ({isDrawerOpen, toggleDrawer}: MenuTopAppProps) => {
  const handleClick = () => {
    toggleDrawer(!isDrawerOpen);
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container flex flex-wrap items-center justify-between">
          {/* <ButtonIcon onClick={handleClick} size={"default"} color={"transparent"} variant={"secondary"} icon={<Icon />} /> */}
          <Link href="/">
            <div className="flex items-center flex-shrink-0 mr-6 text-white cursor-pointer select-none">
              <span className="text-xl font-semibold tracking-tight text-primary-500 dark:text-primary-200">Logo</span>
            </div>
          </Link>
          <Hamburger />
          <div className="flex items-center justify-end flex-grow w-full text-gray-900 dark:text-gray-300 lg:flex lg:items-center lg:w-auto">
            <ul className="flex items-center justify-end mr-8 space-x-8 text-sm">
              {navItems.map(({name, url}, i) => {
                return (
                  <NavLink key={name + i} href={url}>
                    {name}
                  </NavLink>
                );
              })}
            </ul>
            <DarkSwitch />
          </div>
        </nav>
      </header>
    </>
  );
};

export default MenuTopApp;
