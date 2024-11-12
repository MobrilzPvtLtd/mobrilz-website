import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { renderContainer } from "../../../common/utils";

export default function MenuOne({ container }) {
  return (
    <header className="menu -style-1 bg-gradient-to-r from-darkBlue to-mediumBlue">
      <div className={renderContainer(container)}>
        <div className="menu__wrapper gap-10">
          <h1 className="text-white">
            <Link href="/" className="menu__wrapper__logo block">
              <img className="w-40" src="/images/mobrilz-logo.png" alt="Logo" />
            </Link>
          </h1>
          
          <Navigator />
          <MenuFunctionIcons hide={"button"} />
        </div>
      </div>
    </header>
  );
}
