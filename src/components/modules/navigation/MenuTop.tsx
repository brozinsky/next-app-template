import Link from "next/link";
import Hamburger from "@/elements/buttons/Hamburger";
import NavLink from "@/elements/buttons/NavLink";
import DarkSwitch from "@/elements/buttons/DarkSwitch";

const navItems = [
  {name: "Page1", url: "/page-1"},
  {name: "Page2", url: "/page-2"},
  {name: "Page3", url: "/page-3"},
];

const MenuTop = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-md bg-elevation-800">
        <nav className="container flex flex-wrap items-center justify-between">
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

export default MenuTop;
