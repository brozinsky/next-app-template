import {Menu} from "@headlessui/react";
import {defaultConfig} from "next/dist/server/config-shared";

const Dropdown = () => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="border border-dark-50  text-white bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-cente"
          type="button"
        >
          PL
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </Menu.Button>
        <Menu.Items className={"rounded-lg absolute bg-elevation-500 top-8 py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col "}>
          <Menu.Item>
            {({active}) => (
              <a className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${active && ""}`} href="/account-settings">
                PL
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <a className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${active && ""}`} href="/account-settings">
                EN
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="block px-4 py-2 opacity-75 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;
