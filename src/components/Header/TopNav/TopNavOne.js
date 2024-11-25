"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import { XIcon } from "@heroicons/react/solid";

import SocialIcons from "../../Other/SocialIcons";
import Select from "@/components/Control/Select";
import { renderContainer } from "../../../common/utils";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function TopNavOne() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-blue-600 text-black font-semibold px-3 py-0 bg-white dark:bg-black dark:text-white flex items-center justify-center text-center">
        <div className="flex justify-center">
          <div className="hidden lg_2:flex items-center gap-2  px-2.5 py-0 rounded-full ">
            <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
              <Icon.EnvelopeSimple className=" flex-shrink-0" />
            </span>
            <a
              href="mailto:sales@mobrilz.com"
              className=" text-xs text-black whitespace-nowrap flex-shrink-0"
            >
              Sales@Mobrilz.com
            </a>
          </div>
          <div className="hidden lg_2:flex items-center gap-2  px-2.5 py-0 rounded-full ">
            <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
              <Icon.PhoneCall className=" flex-shrink-0" />
            </span>
            <a
              href="tel:+12568542032"
              className="text-button text-xs text-black whitespace-nowrap flex-shrink-0"
            >
              +1 (256) 854-2032
            </a>
          </div>
          <div className="hidden lg_2:flex items-center gap-2  px-2.5 py-0 rounded-full ">
            <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
              <Icon.MapPin className=" flex-shrink-0" />
            </span>
            <a
              href="https://maps.app.goo.gl/iVn8iNN8brrRZYue9"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs text-black whitespace-nowrap flex-shrink-0"
            >
              E-38, 2nd Floor, Sector 63 Noida, U.P. 201301, India
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
