import Link from "next/link";
import classNames from "classnames";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils";
import { useState } from "react";

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(1);
  const [hoverColor, setHoverColor] = useState(null);
  const activeClass = (item) => {
    setVisible(item);
  };
  const handleHover = (state) => {
    if (state == 1) {
      setHoverColor("#e8edfc");
    } else if (state == 2) {
      setHoverColor("#e8edfc");
    } else if (state == 3) {
      setHoverColor("#e8edfc");
    } else if (state == 4) {
      setHoverColor("#e8edfc");
    }
  };
  const btnJson = [
    { id: 1, title: "Mobile", icon: "icon-phone-sync" },
    { id: 2, title: "Web", icon: "icon-user-sync" },
    { id: 3, title: "AWS Services", icon: "icon-user-sync" },
    { id: 4, title: "Ecommerce", icon: "icon-user-sync" },
    { id: 5, title: "Emerging Technologies", icon: "icon-user-sync" },
    { id: 6, title: "Digital Marketing Services", icon: "icon-user-sync" }
  ];
  // console.log("navbar data" , menuData)
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li
            className={`relative  ${
              pathname.includes("/home/") || pathname === "/" ? "active" : ""
            }`}
            key={index}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span className="text-white">{item.title}</span>
            </Link>
          </li>
        );
      }
      if (item.title === "Services") {
        return (
          <li
            key={index}
            className={`${pathname.includes("/services/") ? "active" : ""}`}
            onMouseLeave={() => activeClass(1)}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span className="text-white">{item.title}</span>
            </Link>
            <div className="dropdown-menu -wide flex gap-3">
              <div
                className="w-fit h-96 flex flex-col gap-3 justify-start items-center shadow-none"
                style={{ boxShadow: "10px 0 5px rgb(182 182 182 / 10%)" }}
              >
                <h1 className="text-2xl font-semibold text-[#2d50e1]">
                  Services
                </h1>
                {btnJson.map((item) => (
                  <div
                    className={`w-full transition-all hover:bg-[#e8edfc] hover:scale-[1.01]`}
                    key={item.id}
                    onMouseEnter={() => handleHover(item.id)}
                  >
                    <button
                      className=" text-black dark:text-white w-[17rem] h-10 p-2 px-5 text-sm text-left font-semibold flex gap-2 items-center"
                      onMouseEnter={() => {
                        activeClass(item.id);
                      }}
                    >
                      <span
                        className={`${item.icon} text-blue text-2xl flex-shrink-0`}
                      ></span>
                      {item.title}
                    </button>
                  </div>
                ))}
                <hr className="border-none h-[1px] bg-grey w-full"></hr>
              </div>
              {visible == 1 ? (
                <div className="ml-2 flex gap-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">Mobile</div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    {/* <div className="service-cate heading6 mt-5">Web</div> */}
                    {/* <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                      {item.subMenu.slice(6, 12).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore All Mobile Services</div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {visible == 2 ? (
                <div className="ml-2 flex gap-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">Web</div>
                    <ul className=" w-full grid grid-cols-3 gap-0 gap-y-0 mt-2">
                      {item.subMenu2.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore All Web Services</div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {visible == 3 ? (
                <div className="ml-2 flex gap-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">AWS Services</div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu3.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore All AWS Services</div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {visible == 4 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">Ecommerce</div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu4.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                            {/* <span className="">{i.desc}</span> */}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore Ecommerce Services</div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {visible == 5 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">Emerging Technologies</div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu5.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                            {/* <span className="">{i.desc}</span> */}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore All Emerging Technologies</div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {visible == 6 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate heading6">Digital Marketing Services
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu6.slice(0, ).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-2`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                            ></span>
                            <span>{i.title}</span>
                            {/* <span className="">{i.desc}</span> */}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="heading6">Explore All Digital Marketing Services
                      </div>
                      <div className="caption1 text-surface1 mt-1">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </div>
                      <Link
                        className="button-main text-button-sm mt-3"
                        href="/services/service-detail"
                      >
                        Explore Now
                      </Link>
                      <div className="more-infor mt-8">
                        <div className="mail flex items-center">
                          <Icon.Envelope className="text-lg" />
                          <div className="caption1 pl-2">
                            hi.avitex@gmail.com
                          </div>
                        </div>
                        <div className="call flex items-center mt-3">
                          <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                            <Icon.Phone
                              weight="fill"
                              className="text-sm text-white"
                            />
                          </span>
                          <div className="text-title pl-2">123 456 7890</div>
                        </div>
                        <div className="list-social flex items-center gap-2.5 mt-4">
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <span className="icon-facebook text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.linkedin.com/"
                            target="_blank"
                          >
                            <span className="icon-linkedin text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.twitter.com/"
                            target="_blank"
                          >
                            <span className="icon-twitter text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.youtube.com/"
                            target="_blank"
                          >
                            <span className="icon-youtube text-base"></span>
                          </Link>
                          <Link
                            className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <span className="icon-instagram text-sm"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </li>
        );
      }
      if (item.title === "Pages") {
        return (
          <li
            className={`relative ${
              pathname.includes("/pages/") ? "active" : ""
            }`}
            key={index}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span className="text-white">{item.title}</span>
            </Link>
            <ul className="dropdown-menu style-pages grid grid-cols-2 gap-5">
              {item.subMenu?.map((i, index) => (
                <li
                  key={index}
                  className={`${pathname.includes(i.to) ? "active" : ""}`}
                >
                  <Link href={i.to}>
                    <span className="text-white">{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li
          className={`relative ${
            pathname.includes(
              "/" + convertToSlug(item.title.toLowerCase()) + "/"
            )
              ? "active"
              : ""
          }`}
          key={index}
        >
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span className="text-white">{item.title}</span>
          </Link>
          {item.title != "Blogs" && item.title != "Career" ? (
            <ul className="dropdown-menu">
              {item.subMenu?.map((i, index) => (
                <li
                  key={index}
                  className={`${pathname.includes(i.to) ? "active" : ""}`}
                >
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
