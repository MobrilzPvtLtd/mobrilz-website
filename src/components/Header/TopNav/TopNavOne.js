'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import { XIcon } from "@heroicons/react/solid";

import SocialIcons from "../../Other/SocialIcons";
import Select from "@/components/Control/Select";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne() {


    const [isVisible, setIsVisible] = React.useState(true);

if (!isVisible) return null;

return (
  <>
  <div className="bg-blue-600 text-black font-semibold px-3 py-1 bg-white dark:bg-black dark:text-white flex items-center justify-between text-center">
    <div className="flex-1">
      <p className="text-sm md:text-base">This is a message from mobrilz</p>
    </div>
   
      <Link href="#!" className="text-sm md:text-base font-semibold underline ml-4">
          Learn More
      </Link>
  
    {/* <button
      onClick={() => setIsVisible(false)}
      className="ml-4 p-1 rounded hover:bg-blue-700"
      aria-label="Close"
    >
      <XIcon className="h-5 w-5" />
    </button> */}
  </div>
    </>
  );
}
