'use client'

import React, { useState} from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFunctionIcons(props) {
  const cartState = useSelector((state) => state.cartReducer);
  const hide = props.hide || "";
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
 
  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="list__button flex items-center gap-4 pr-10">
          {!hide.includes("phone") && (
            <div className="flex items-center gap-2  px-2.5 py-[5px] rounded-full max-xl:hidden">
              <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
                <Icon.PhoneCall className="text-2xl flex-shrink-0" />
              </span>
              <span className="text-button text-white whitespace-nowrap flex-shrink-0"> + 1 (256) 854-2032</span>
            </div>
          )}
          <Link href={'/pages/contact-us'} className="button-main rounded-lg text-button-sm max-sm:hidden">Contact</Link>
        </div>
        <div className="list__icons flex items-center">
          {!hide.includes("search") && (
            <button
              className="menu-icon -search flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                setShowSearch(true);
              }}
              style={{ marginRight: hide.includes("cart") && 0 }}
            >
              <Icon.MagnifyingGlass className="text-2xl" />
            </button>
          )}
         
          {!hide.includes("button") && (
            <Link href={'/pages/contact-us'} className="button-main max-sm:hidden ml-4">Get A quote</Link>
          )}
        </div>
      </div>
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
