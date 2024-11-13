import React from "react";
import MenuOne from "./Menu/MenuOne";
import TopNavOne from "./TopNav/TopNavOne";
import MenuFive from "./Menu/MenuFive";

export default function HeaderOne(props) {
  return (
    <>
    
    <TopNavOne />
      <MenuOne {...props} />
    </>
  );
}
