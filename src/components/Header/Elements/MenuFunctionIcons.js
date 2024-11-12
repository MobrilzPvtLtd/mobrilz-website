"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useTheme } from 'next-themes'
import ThemeToggle from "../ThemeToggle";

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
              {/* <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
                <Icon.PhoneCall className="text-2xl flex-shrink-0" />
              </span> */}
              {/* <span className="text-button text-white whitespace-nowrap flex-shrink-0">
                {" "}
                + 1 (256) 854-2032
              </span> */}
            </div>
          )}
          <Link
            href={"/pages/contact-us"}
            className="button-main rounded-lg text-button-sm hidden lg:block"
          >
            Contact
          </Link>

          <ThemeToggle/>

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
