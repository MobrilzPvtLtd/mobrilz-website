"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useTheme } from 'next-themes'

export default function MenuFunctionIcons(props) {
  const cartState = useSelector((state) => state.cartReducer);
  const hide = props.hide || "";
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [open, setOpen] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false
  );

  const { theme, setTheme } = useTheme()
 
  

  function switchTheme() {
   setIsDarkTheme(!isDarkTheme)
   setTheme(!isDarkTheme ? 'dark' : "light")
  }
  useEffect(()=>{

    localStorage.setItem("darkmode" , isDarkTheme )
  },[isDarkTheme])

  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="list__button flex items-center gap-4 pr-10">
          {!hide.includes("phone") && (
            <div className="hidden lg_2:flex items-center gap-2  px-2.5 py-[5px] rounded-full ">
              <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
                <Icon.PhoneCall className="text-2xl flex-shrink-0" />
              </span>
              <span className="text-button text-white whitespace-nowrap flex-shrink-0">
                {" "}
                + 1 (256) 854-2032
              </span>
            </div>
          )}
          <Link
            href={"/pages/contact-us"}
            className="button-main rounded-lg text-button-sm hidden lg:block"
          >
            Contact
          </Link>

          <div
            
          >
            {/* <span
              className={`${
                isDarkTheme ? "text-gray-100" : "text-gray-900"
              } text-sm min-w-[5rem] bg-black p-2`}
            >
              {isDarkTheme ? "Make it light" : "Make it dark"}
            </span> */}
            <button
              
              onClick={switchTheme}
              type="button"
              className={`${
                isDarkTheme
                  ? "text-gray-300 border-gray-300 "
                  : "text-gray-800 border-gray-500"
              } border-2 rounded-lg text-sm p-2`}
            >
              {!isDarkTheme ? 
              <svg
               
                className={`${isDarkTheme ? "hidden" : ""} w-5 h-5`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg> :
              <svg
                id="theme-toggle-light-icon"
                className={`${isDarkTheme ? "" : "hidden"} w-5 h-5`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>}
            </button>
          </div>

          <button
            className="flex items-center space-x-0 focus:outline-none  lg:hidden "
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={`transform transition w-full h-px bg-white absolute ${
                  showMobileNav ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`transform transition w-full h-px bg-white absolute ${
                  showMobileNav ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>
              <span
                className={`transform transition w-full h-px bg-white absolute ${
                  showMobileNav ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
