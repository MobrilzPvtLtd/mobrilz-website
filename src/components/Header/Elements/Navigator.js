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
  const [ID, setID] = useState(1);
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
    {
      id: 1,
      title: "Mobile",
      icon: "fa-regular fa-mobile",
      desc: "Custom mobile app solutions.",
    },
    {
      id: 2,
      title: "Web",
      icon: "fa-regular fa-desktop",
      desc: "full-stack web development.",
    },
    {
      id: 3,
      title: "AWS Services",
      icon: "fa-brands fa-aws",
      desc: "AWS certified Company.",
    },
    {
      id: 4,
      title: "Ecommerce",
      icon: "fa-regular fa-cart-shopping",
      desc: "Complete ecommerce.",
    },
    {
      id: 5,
      title: "Emerging Technologies",
      icon: "fa-regular fa-cloud-arrow-up",
      desc: "AI, IoT, AR/VR",
    },
    {
      id: 6,
      title: "Digital Marketing Services",
      icon: "fa-regular fa-globe",
      desc: "Boost online visibility",
    },
    {
      id: 7,
      title: "Outsourcing",
      icon: "fa-brands fa-salesforce",
      desc: "Reliable IT outsourcing.",
    },
  ];

  const handleHoverExplore = (id) => {
    setID(id);
  };
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
            <div className="dropdown-menu-service -wide flex gap-3">
              <div
                className="w-fit h-96 flex flex-col gap-3 justify-start items-center shadow-none"
                style={{ boxShadow: "10px 0 5px rgb(182 182 182 / 10%)" }}
              >
                <h1 className="text-lg w-full text-left px-5 ml-4 font-semibold text-[#2d50e1]">
                  Services
                </h1>
                {btnJson.map((item) => (
                  <div
                    className={`w-full transition-all py-2 hover:bg-[#e8edfc] hover:scale-[1.01]`}
                    key={item.id}
                    onMouseEnter={() => handleHover(item.id)}
                  >
                    <button
                      className=" text-black dark:text-white w-[17rem] h-10 p-2 px-5  text-sm text-left font-semibold flex gap-4 justify-start items-center"
                      onMouseEnter={() => {
                        activeClass(item.id);
                      }}
                    >
                      <div className="w-10 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                        <i
                          className={`${item.icon} text-blue text-lg   hover:bg-linear aspect-square`}
                        ></i>
                      </div>
                      <div className="flex flex-col justify-start">
                        <span>{item.title}</span>
                        <span className="text-xs text-[#91939d]">
                          {item.desc}
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
                <hr className="border-none h-[1px] bg-grey w-full"></hr>
              </div>
              {visible == 1 ? (
                <div className="ml-2 flex gap-2 ">
                  <div className=" w-3/4 flex gap-5 ">
                    <div>
                      <div>
                        <div className="service-cate text-lg font-semibold">
                          Native App Development
                        </div>
                        <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                          {item.subMenu.slice(0, 3).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md  `}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <hr className="border-none h-[1px] bg-grey"></hr>
                      </div>
                      <div>
                        <div className="service-cate text-lg font-semibold mt-5">
                          Cross-Platform App Development
                        </div>
                        <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                          {item.subMenu.slice(3, 5).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md `}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="grid grid-cols-1 gap-0 gap-y-0 ">
                          {item.subMenu.slice(5, 9).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md`}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <hr className="border-none h-[1px] bg-grey"></hr>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="service-cate text-lg font-semibold ">
                          Language-Specific
                        </div>
                        <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                          {item.subMenu.slice(9, 10).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md `}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <hr className="border-none h-[1px] bg-grey"></hr>
                      </div>
                      <div>
                        <div className="service-cate text-lg font-semibold mt-5">
                          Legacy/Niche
                        </div>
                        <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                          {item.subMenu.slice(10, 11).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md `}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <hr className="border-none h-[1px] bg-grey"></hr>
                    </div>
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="text-lg font-semibold">
                        Explore All Mobile Services
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
              {visible == 2 ? (
                <div className="ml-2 flex gap-2">
                  <div className="w-full p-2">
                    <div className="service-cate text-lg font-semibold">
                      Web
                    </div>
                    <ul className=" w-full relative flex flex-wrap gap-4 gap-y-5 mt-2">
                      {item.subMenu2.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${
                            pathname === i.to ? "active" : ""
                          } bg-[#e8edfc] px-2`}
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
                            <div className="w-fit  p-1 flex justify-center items-center ">
                              <i className={`${i.icon} text-blue text-md `}></i>
                            </div>
                            <span className="text-[#565454]">{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* <ul className=" w-full flex flex-wrap gap-0 gap-y-0 mt-2">
                      {item.subMenu2.slice(5,9).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className=" w-full flex fflex-wrap gap-0 gap-y-0 mt-2">
                      {item.subMenu2.slice(9,13).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className=" w-full flex fflex-wrap gap-0 gap-y-0 mt-2">
                      {item.subMenu2.slice(13,18).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className=" w-full flex fflex-wrap gap-0 gap-y-0 mt-2">
                      {item.subMenu2.slice(18).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="text-lg font-semibold">
                        Explore All Web Services
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
              {visible == 3 ? (
                <div className="ml-2 flex gap-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate text-lg font-semibold">
                      AWS Services
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu3.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
                            ></span>
                            <span>{i.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/4 ">
                    <div className="content bg-linear rounded-lg p-6">
                      <div className="text-lg font-semibold">
                        Explore All AWS Services
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
              {visible == 4 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate text-lg font-semibold">
                      Ecommerce
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu4.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
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
                      <div className="text-lg font-semibold">
                        Explore Ecommerce Services
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
              {visible == 5 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate text-lg font-semibold">
                      Emerging Technologies
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu5.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
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
                      <div className="text-lg font-semibold">
                        Explore All Emerging Technologies
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
              {visible == 6 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate text-lg font-semibold">
                      Digital Marketing Services
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu6.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
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
                      <div className="text-lg font-semibold">
                        Explore All Digital Marketing Services
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
              {visible == 7 ? (
                <div className="flex gap-2 ml-2">
                  <div className=" w-3/4 ">
                    <div className="service-cate text-lg font-semibold">
                      Outsourcing
                    </div>
                    <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                      {item.subMenu7.slice(0).map((i, index) => (
                        <li
                          key={index}
                          className={`${pathname === i.to ? "active" : ""}`}
                        >
                          <Link
                            className={`flex items-center gap-4`}
                            href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                              process.env.PUBLIC_URL +
                              "/services/" +
                              convertToSlug(i.title)
                            }
                          >
                            <span
                              className={`${i.icon} text-blue text-lg flex-shrink-0 w-5`}
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
                      <div className="text-lg font-semibold">
                        Explore All Outsourcing Services
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
      if (item.title === "Industry") {
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
              <div className="ml-2 flex gap-2 justify-between w-full">
                {/* <div className="ml-2 flex gap-2 "> */}
                <div className=" w-3/4 flex gap-5 ">
                  <div>
                    <div>
                      <div className="service-cate text-lg font-semibold">
                        Digital Transformation
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(0, 4).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md  `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <hr className="border-none h-[1px] bg-grey"></hr>
                    </div>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Industrial Automation
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(4, 8).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {/* <ul className="grid grid-cols-1 gap-0 gap-y-0 ">
                          {item.subMenu.slice(8, 13).map((i, index) => (
                            <li
                              key={index}
                              className={`${pathname === i.to ? "active" : ""}`}
                            >
                              <Link
                                className={`flex items-center gap-2 ml-2`}
                                href={
                                  process.env.PUBLIC_URL + "/services/[slug]"
                                }
                                as={
                                  process.env.PUBLIC_URL +
                                  "/services/" +
                                  convertToSlug(i.title)
                                }
                              >
                                <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                  <i
                                    className={`${i.icon} text-blue text-md`}
                                  ></i>
                                </div>
                                <span className="text-[#565454]">
                                  {i.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul> */}
                      <hr className="border-none h-[1px] bg-grey"></hr>
                    </div>
                    <div>
                      <div className="service-cate text-lg font-semibold ">
                        Product Development
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(8, 12).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <hr className="border-none h-[1px] bg-grey"></hr>
                    </div>
                  </div>
                  <div>
                    
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Media and Entertainment
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(12, 15).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Education and Learning
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(15, 17).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Logistics and Transportation
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(17, 19).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Social and Community
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(19, 22).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    
                  </div>
                  <div>
                  <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Travel and Hospitality
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(22, 24).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Food and Beverage
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(24, 26).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                    <div>
                      <div className="service-cate text-lg font-semibold mt-5">
                        Other Services
                      </div>
                      <ul className="grid grid-cols-1 gap-0 gap-y-0 mt-2">
                        {item.subMenu.slice(26, 36).map((i, index) => (
                          <li
                            key={index}
                            className={`${pathname === i.to ? "active" : ""}`}
                          >
                            <Link
                              className={`flex items-center gap-2 ml-2`}
                              href={process.env.PUBLIC_URL + "/services/[slug]"}
                              as={
                                process.env.PUBLIC_URL +
                                "/services/" +
                                convertToSlug(i.title)
                              }
                            >
                              <div className="w-7 border border-grey p-1 bg-white rounded-[50%] flex justify-center items-center ">
                                <i
                                  className={`${i.icon} text-blue text-md `}
                                ></i>
                              </div>
                              <span className="text-[#565454]">{i.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-none h-[1px] bg-grey"></hr>
                  </div>
                </div>
                {/* <div className=" w-3/4 ">
                  <div className="service-cate text-lg font-semibold">Industry</div>
                  <ul className="grid grid-cols-2 gap-0 gap-y-0 mt-2">
                    {item.subMenu.map((i, index) => (
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
                          onMouseEnter={() => handleHoverExplore(i.id)}
                          onMouseLeave={() => handleHoverExplore(1)}
                        >
                        
                          <i
                            className={`${i.icon} text-blue text-lg flex-shrink-0`}
                          ></i>
                          <span>{i.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <hr className="border-none h-[1px] bg-grey"></hr>
                </div> */}
                <div className="w-1/4 ">
                  {item.title === "Industry" ? (
                    <div>
                      {item.subMenu.map((i, index) => (
                        <div>
                          {ID === i.id && (
                            <div
                              className="content bg-linear rounded-lg p-6"
                              key={index}
                            >
                              <div className="text-lg font-semibold">
                                Explore All {i.title} Services
                              </div>

                              <div className="caption1 text-surface1 mt-1">
                                Unlocking the Full Spectrum of IT Solutions and
                                Business Consulting for your needs
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
                                  <div className="text-title pl-2">
                                    123 456 7890
                                  </div>
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
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* </div> */}
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
