"use-client";
import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  function getCrumbs(path: string) {
    return path.split("/").filter((s) => s !== "");
  }

  const crumbsArray = getCrumbs(pathname);

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            {/* <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg> */}
            Home
          </Link>
        </li>
        {crumbsArray.map((crumb, index) => {
          const crumbs = crumbsArray.slice(0, index + 1);
          return (
            <React.Fragment key={crumb}>
              {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg> */}
              <svg className="h-2 text-gray-500 dark:text-gray-400" width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.375 18.6C0.125 18.35 0 18.054 0 17.712C0 17.37 0.125 17.0743 0.375 16.825L7.7 9.5L0.35 2.15C0.116667 1.91667 0 1.625 0 1.275C0 0.925 0.125 0.625 0.375 0.375C0.625 0.125 0.921 0 1.263 0C1.605 0 1.90067 0.125 2.15 0.375L10.55 8.8C10.65 8.9 10.721 9.00833 10.763 9.125C10.805 9.24167 10.8257 9.36667 10.825 9.5C10.825 9.63333 10.804 9.75833 10.762 9.875C10.72 9.99167 10.6493 10.1 10.55 10.2L2.125 18.625C1.89167 18.8583 1.604 18.975 1.262 18.975C0.92 18.975 0.624333 18.85 0.375 18.6Z" fill="currentColor"/>
              </svg>
              {crumbsArray.length !== index + 1 ? (
                <li className="inline-flex items-center">
                  <Link href={`/${crumbs.join('/')}`} className="inline-flex items-center text-sm font-medium text-gray-700 capitalize hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    {crumb}
                  </Link>
                </li>
              ) : (
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="ml-1 text-sm font-medium text-gray-500 capitalize md:ml-2 dark:text-gray-400">
                      {crumb}
                    </span>
                  </div>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
