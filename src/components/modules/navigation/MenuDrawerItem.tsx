"use-client";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

type MenuDrawerItemProps = {
  id: number;
  url: string;
  title: string;
  Icon: React.FunctionComponent;
  list?: {id: number; title: string; url: string}[];
  isCollapsed?: boolean;
};

const MenuDrawerItem = ({id, url, title, Icon, list, isCollapsed}: MenuDrawerItemProps) => {
  const [isOverButton, setIsOverButton] = useState<boolean>(false);
  const [isOverList, setIsOverList] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTouchInput, setIsTouchInput] = useState<boolean>(false);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const buttonRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      buttonRef.current?.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      buttonRef.current?.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList, isTouchInput, isOpen]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <li
      ref={buttonRef}
      onTouchStart={() => {
        setIsTouchInput(true);
      }}
      onMouseEnter={() => {
        setIsOverButton(true);
      }}
      onMouseLeave={() => {
        setIsOverButton(false);
      }}
      onClick={() => {
        setHasClicked(true);
        setIsOpen(!isOpen);
      }}
      onKeyDown={() => {
        setIsOpen(!isOpen);
      }}
    >
      {list && list.length > 0 ? (
        //item with on hover box
        <>
          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer select-none dark:text-white hover:bg-gray-100 dark:hover:bg-dark-900">
            <div className="w-8 h-8">
              <Icon />
            </div>
            {!isCollapsed ? <span className="ml-3">{title}</span> : null}
          </div>
          {isOpen ? (
            <div
              onMouseEnter={() => {
                setIsOverList(true);
              }}
              onMouseLeave={() => {
                setIsOverList(false);
              }}
              className="pt-12 h-full absolute left-[318px] top-0 bg-white w-[200px] dark:bg-dark-900"
            >
              {list.map(({id, title, url}) => {
                return (
                  <Link key={id} href={url} className="flex items-center p-2 px-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-800">
                    {title}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </>
      ) : (
        //link without on hover box
        <Link href={url} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-900">
          <div className="w-8 h-8">
            <Icon />
          </div>
          {!isCollapsed ? <span className="ml-3">{title}</span> : null}
        </Link>
      )}
    </li>
  );
};

export default MenuDrawerItem;
