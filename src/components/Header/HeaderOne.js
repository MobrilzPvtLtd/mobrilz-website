import React ,{ useState, useEffect }  from "react";
import MenuOne from "./Menu/MenuOne";
import TopNavOne from "./TopNav/TopNavOne";
import MenuFive from "./Menu/MenuFive";

export default function HeaderOne(props) {
  const [hideTopNav, setHideTopNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideTopNav(true); // Hide on scroll down
      } else {
        setHideTopNav(false); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!hideTopNav && <TopNavOne />}
      <MenuOne {...props} />
    </>
  );
}
