import Link from "next/link";
// import {useLocation} from "react-router-dom";

const NavLink = ({children, href}) => {
  //   const location = useLocation();
  return (
    <Link href={href}>
      <span
        // className={`${location.pathname === href ? "navlink--active" : ""}
        className="block mt-4 cursor-pointer select-none navlink lg:inline-block lg:mt-0"
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
