import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import serviceData from "@/data/service/data.json";
import { convertToSlug } from "@/common/utils";

export default function FooterOne({ classname }) {
  const data = [
    {
      title: "About Company",
      submenu: [
        {
          title: "About Us",
          link: "/about-us",
        },
        {
          title: "What We Do",
          link: "#!",
        },
        {
          title: "Career",
          link: "#!",
        },
        {
          title: "Industry We Serve",
          link: "#!",
        },
        {
          title: "Outsourcing",
          link: "#!",
        },
        {
          title: "Blog",
          link: "#!",
        },
      ],
    },
    {
      title: "Mobile Service",
      submenu: [
        {
          title: "Android App Development",
          link: "#!",
        },
        {
          title: "Android UX-UI App Development",
          link: "#!",
        },
        {
          title: "Android Game Development",
          link: "#!",
        },
        {
          title: "iPhone App Development",
          link: "#!",
        },
        {
          title: "iPhone UX-UI App Development",
          link: "#!",
        },
        {
          title: "iPhone Game Development",
          link: "#!",
        },
        {
          title: "iPad App Development",
          link: "#!",
        },
        {
          title: "iPad UX/UI App Development",
          link: "#!",
        },
        {
          title: "React Native App Development",
          link: "#!",
        },
        {
          title: "Kotlin App Development",
          link: "#!",
        },
        {
          title: "Xamarin App Development",
          link: "#!",
        },
      ],
    },
    {
      title: "Web Services",
      submenu: [
        {
          title: "Web Apps Development",
          link: "/about-us",
        },
        {
          title: "PHP Development",
          link: "#!",
        },
        {
          title: "JAVA Development",
          link: "#!",
        },
        {
          title: "Angular JS Development",
          link: "#!",
        },
        {
          title: "Node JS Development",
          link: "#!",
        },
        {
          title: "React JS Development",
          link: "#!",
        },
        {
          title: "Ruby On Rails Development",
          link: "#!",
        },
        {
          title: "Python Development",
          link: "#!",
        },
        {
          title: "Django Development",
          link: "#!",
        },
        {
          title: "Framework Development",
          link: "#!",
        },
        {
          title: "Laravel Development",
          link: "#!",
        },
        {
          title: "zend Development",
          link: "#!",
        },
      ],
    },
    {
      title: "Resources",
      submenu: [
        {
          title: "Portfolio",
          link: "#",
        },
        {
          title: "Make Payment",
          link: "#!",
        },
        {
          title: "Refund Policy",
          link: "#!",
        },
        {
          title: "Privacy Policy",
          link: "#!",
        },
        {
          title: "Terms Conditions",
          link: "#!",
        },
        {
          title: "Contact Us",
          link: "#!",
        },
        {
          title: "Sitemap",
          link: "#!",
        },
      ],
    },
  ];
  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex flex-col justify-between gap-y-8 max-xl:flex-wrap">
            {/* <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <div className="caption1">
                  Welcome to Mobrilz! We provide diverse IT solutions with a
                  team of experts. From IT management to cloud solutions, we
                  have you covered.{" "}
                </div>
                <div className="caption1">
                  Mon - Fri: 10:00 - 18:00 <br />
                  Closed on Weekends{" "}
                </div>
              </div>
            </div> */}
            <div className="w-full">
              <div className="footer-navigate flex md:justify-evenly max-sm:gap-4 max-sm:flex-wrap">
                <div className="w-full sm:w-1/4">
                  <div className="item-heading text-button">About Company</div>
                  <ul className="list-nav mt-3">
                    {data.map(
                      (item) =>
                        item.title === "About Company" && (
                          <div>
                            {item.submenu.map((item, index) => (
                              <li className="mt-2" key={index}>
                                <Link
                                  className={`caption1 hover-underline ${
                                    classname && "underline-white"
                                  }`}
                                  // href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/[slug]"}
                                  // as={
                                  //   process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                                  // }
                                  href="#!"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </div>
                        )
                    )}
                  </ul>
                  <div className="mt-7">
                  <h2>Follow Us On</h2>
                  <div className="list-social flex items-center flex-wrap gap-2.5 mt-1">
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                   <i class="fab fa-github text-base"></i> 
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="icon-facebook text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <i className="icon-linkedin text-base"></i>
                  </Link>
                  {/* <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.twitter.com/"
                    target="_blank"
                  >
                    <i className="icon-twitter text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <i className="icon-youtube text-base"></i>
                  </Link>
                  <Link
                    className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${
                      classname
                        ? "border-surface2 hover:text-black hover:bg-white"
                        : "border-black hover:text-white hover:bg-black"
                    }`}
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <i className="icon-instagram text-sm"></i>
                  </Link> */}
                </div>
                </div>
                </div>
                <div className="w-full sm:w-1/4">
                  <div className="item-heading text-button">Services</div>
                  {/* <div className="flex"> */}
                  <div className="w-full">
                    <ul className="list-nav mt-3">
                      {data.map(
                        (item) =>
                          item.title === "Mobile Service" && (
                            <div>
                              {item.submenu.map((item, index) => (
                                <li className="mt-2" key={index}>
                                  <Link
                                    className={`caption1 hover-underline ${
                                      classname && "underline-white"
                                    }`}
                                    // href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/[slug]"}
                                    // as={
                                    //   process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                                    // }
                                    href="#!"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          )
                      )}
                    </ul>
                  </div>

                  {/* </div> */}
                </div>
                <div className="w-full sm:w-1/4">
                  <div className="w-full">
                    <ul className="list-nav mt-3">
                      {data.map(
                        (item) =>
                          item.title === "Web Services" && (
                            <div>
                              {item.submenu.map((item, index) => (
                                <li className="mt-2" key={index}>
                                  <Link
                                    className={`caption1 hover-underline ${
                                      classname && "underline-white"
                                    }`}
                                    // href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/[slug]"}
                                    // as={
                                    //   process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                                    // }
                                    href="#!"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          )
                      )}
                    </ul>
                  </div>
                </div>

                <div className="w-full sm:w-1/4">
                  <div className="item-heading text-button">RESOURCES</div>
                  <ul className="list-nav mt-3">
                    {data.map(
                      (item) =>
                        item.title === "Resources" && (
                          <div>
                            {item.submenu.map((item, index) => (
                              <li className="mt-2" key={index}>
                                <Link
                                  className={`caption1 hover-underline ${
                                    classname && "underline-white"
                                  }`}
                                  // href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/[slug]"}
                                  // as={
                                  //   process.env.NEXT_PUBLIC_PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                                  // }
                                  href="#!"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </div>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                {/* <div className="heading text-button">Newsletter</div> */}
                {/* <div className="send-block mt-4 flex items-center w-full relative">
                  <Icon.Envelope className="text-lg absolute top-1/2 left-0 -translate-y-1/2" />
                  <input
                    className={`caption1 w-full h-[50px] pl-7 pr-9 bg-transparent border-b ${
                      classname
                        ? "border-white focus:border-white"
                        : "border-black"
                    }`}
                    type="text"
                    placeholder="Your email address"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Icon.PaperPlaneTilt className="text-2xl" />
                  </button>
                </div> */}
                
              </div>
            </div>
            <div className="flex flex-col gap-10 md:flex-col lg:flex-row xl:flex-row">
              <div className="w-full md:w-1/4 flex flex-col gap-3">
                <div className="heading text-button flex gap-2 items-center">
                  {" "}
                  <div className="w-12 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#999"
                        fillRule="nonzero"
                        d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"
                      />
                      <path
                        fill="#fff"
                        fillRule="nonzero"
                        d="M255.99 19.48c65.31 0 124.46 26.48 167.25 69.27 42.79 42.79 69.28 101.93 69.28 167.24s-26.49 124.46-69.28 167.25c-42.79 42.79-101.94 69.28-167.25 69.28-65.23 0-124.38-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24 42.79-42.79 101.93-69.27 167.24-69.27z"
                      />
                      <path
                        fill="#F93"
                        fillRule="nonzero"
                        d="M255.99 39.59c84.4 0 157.5 48.29 193.17 118.74H62.84C98.52 87.88 171.62 39.59 255.99 39.59z"
                      />
                      <path
                        fill="#128807"
                        fillRule="nonzero"
                        d="M60.38 348.64h391.24c-34.71 73.18-109.24 123.77-195.63 123.77-86.37 0-160.89-50.59-195.61-123.77z"
                      />
                      <path
                        fill="#008"
                        d="M255.99 179.9c42.05 0 76.13 34.08 76.13 76.11 0 42.04-34.08 76.12-76.13 76.12-42.03 0-76.11-34.08-76.11-76.12 0-42.03 34.08-76.11 76.11-76.11zm13.31 75.43c-.04-.71-.13-1.41-.27-2.09l13.3-1.92 38.01-12.54-39.2 8.14-12.46 4.99c-.22-.68-.49-1.33-.81-1.95l12.34-5.29 33.46-21.96c-.9-1.56-1.85-3.08-2.87-4.55l.07-.05c-1.46 1.13-3.55.84-4.68-.61a3.345 3.345 0 0 1 .56-4.61 62.382 62.382 0 0 0-3.66-3.96v-.02l-29.87 26.65-8.29 10.57c-.53-.48-1.1-.91-1.68-1.3l8.04-10.75 18.01-35.75-21.95 33.47-5.29 12.35c-.62-.32-1.28-.59-1.97-.81l5.01-12.46 8.14-39.2-12.56 38.01-1.9 13.3c-.68-.14-1.38-.23-2.09-.28l1.6-13.34-2.3-39.95c-1.8 0-3.59.09-5.37.22l-.01-.1c.24 1.83-1.05 3.5-2.87 3.74a3.325 3.325 0 0 1-3.72-2.79c-3.58.65-7.05 1.59-10.4 2.79.65 1.68-.16 3.6-1.84 4.28-1.66.68-3.58-.08-4.31-1.73-1.63.78-3.23 1.63-4.78 2.52l21.96 33.45 5.29 12.35c.62-.32 1.27-.59 1.95-.81l-4.99-12.46-8.14-39.2 12.55 38.01 1.91 13.3c.68-.14 1.38-.23 2.09-.28l-1.6-13.34 2.28-39.95c1.81 0 3.61.08 5.39.22l.01-.1a3.342 3.342 0 0 0 2.87 3.74c1.79.24 3.45-1.01 3.72-2.79 3.58.65 7.05 1.59 10.41 2.79-.65 1.68.16 3.6 1.82 4.28 1.68.68 3.59-.08 4.32-1.73 3.28 1.55 6.38 3.34 9.33 5.39l.05-.07c-1.13 1.46-.84 3.55.61 4.67a3.36 3.36 0 0 0 4.68-.61l-.07.08a64.22 64.22 0 0 1 3.94 3.62h.02l-26.64 29.89-10.56 8.29c.48.53.9 1.08 1.28 1.68l10.76-8.06 35.74-18c.89 1.56 1.74 3.15 2.52 4.78a3.298 3.298 0 0 0-1.73 4.31c.68 1.67 2.58 2.48 4.28 1.83 1.19 3.34 2.13 6.83 2.78 10.41a3.325 3.325 0 0 0-2.78 3.72c.23 1.82 1.91 3.1 3.73 2.86l-.09.02c.13 1.77.22 3.56.22 5.37l-39.95-2.28-13.35 1.6zm-46.61-56.98 18.01 35.73 8.06 10.75c-.6.39-1.16.82-1.68 1.3l-8.3-10.57-29.87-26.63c1.27-1.27 2.6-2.49 3.96-3.66 1.13 1.39 3.18 1.65 4.61.55a3.33 3.33 0 0 0 .62-4.67l.05.07c1.48-1.02 2.99-1.97 4.54-2.87zm-13.78 10.58 26.64 29.87 10.56 8.29c-.47.53-.9 1.08-1.3 1.68l-10.75-8.06-35.74-18c-.89 1.55-1.73 3.15-2.5 4.76a3.35 3.35 0 0 1 1.72 4.33c-.68 1.67-2.6 2.48-4.27 1.83-.61 1.7-1.13 3.41-1.6 5.15l38 12.54 13.31 1.92c-.15.68-.24 1.38-.29 2.09l-13.33-1.6-39.96 2.28c0 1.81.1 3.61.22 5.38l-.09.02c1.82-.25 3.5 1.03 3.74 2.87.23 1.79-1.02 3.45-2.79 3.72.65 3.58 1.58 7.03 2.79 10.39 1.67-.64 3.59.17 4.27 1.83.68 1.67-.08 3.6-1.72 4.33.77 1.63 1.61 3.21 2.5 4.76l35.74-18 10.75-8.05c.4.59.83 1.16 1.3 1.68l-10.56 8.3-26.65 29.87h.01c1.27 1.26 2.6 2.48 3.96 3.66 1.13-1.4 3.18-1.67 4.61-.56 1.46 1.12 1.74 3.22.62 4.67l.05-.06c1.47 1.03 2.99 1.98 4.54 2.88l21.96-33.48 5.29-12.35c.62.33 1.27.6 1.95.82l-4.99 12.47-8.14 39.19c1.73.46 3.49.86 5.26 1.19a3.325 3.325 0 0 1 3.72-2.8c1.79.25 3.06 1.87 2.87 3.65 1.77.15 3.56.23 5.38.23l2.3-39.97-1.6-13.34c.71-.03 1.41-.13 2.09-.27l1.9 13.3 12.56 38.01-8.14-39.19-5.01-12.47c.69-.22 1.35-.5 1.97-.82l5.29 12.35 21.95 33.48c1.55-.9 3.09-1.87 4.56-2.88l.05.06c-1.13-1.45-.84-3.55.61-4.67 1.43-1.11 3.49-.84 4.6.56 1.37-1.16 2.7-2.4 3.97-3.66z"
                      />
                    </svg>
                  </div>
                  Head Office
                </div>
                <div className="flex gap-4 items-center px-3">
                  <i
                    className={`fal fa-location-dot text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>
                  <span>
                    {" "}
                    E-38, 2nd Floor, Sector 63 Noida, U.P. 201301, India
                  </span>
                </div>
                <div className="flex gap-4 items-center px-3">
                  {" "}
                  <i
                    className={`fal fa-phone text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>
                  +91-8010355718
                </div>
                <div className="flex gap-4 items-center px-3">
                  {" "}
                  <i
                    className={`fal fa-envelope text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>{" "}
                  sales@mobrilz.com
                </div>
                <div className="flex gap-4 items-center px-3">
                  {" "}
                  <i
                    className={`fal fa-business-time text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>
                  Opening Hours: 10:00 - 18:00
                </div>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="heading text-button flex gap-2 items-center">
                    <div className="w-12 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 512 356.18"
                      >
                        <g fillRule="nonzero">
                          <path
                            fill="#fff"
                            d="M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z"
                          />
                          <path d="M512 106.852H0V28.14C0 12.663 12.663 0 28.137 0H483.86C499.337 0 512 12.663 512 28.14v78.712z" />
                          <path
                            fill="#060"
                            d="M0 249.328h512v78.712c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04v-78.712z"
                          />
                          <path
                            stroke="#000"
                            strokeMiterlimit="22.926"
                            d="M192.379 283.834l3.855 2.226 103.991-180.118c6.083-1.63 9.421-7.413 12.761-13.197 2.226-3.857 11.131-19.279 14.989-39.32-15.426 13.363-24.331 28.785-26.557 32.642-3.34 5.784-6.678 11.568-5.049 17.649l-103.99 180.118z"
                          />
                          <path
                            fill="#fff"
                            d="M192.379 283.834l3.855 2.226 103.991-180.118c6.083-1.63 9.421-7.413 12.761-13.197 2.226-3.857 11.131-19.279 14.989-39.32-15.426 13.363-24.331 28.785-26.557 32.642-3.34 5.784-6.678 11.568-5.049 17.649l-103.99 180.118z"
                          />
                          <path
                            stroke="#000"
                            strokeMiterlimit="22.926"
                            d="M319.621 283.834l-3.855 2.226-103.991-180.118c-6.083-1.63-9.421-7.413-12.761-13.197-2.226-3.857-11.131-19.279-14.989-39.32 15.426 13.363 24.331 28.785 26.557 32.642 3.34 5.784 6.678 11.568 5.049 17.649l103.99 180.118z"
                          />
                          <path
                            fill="#fff"
                            d="M319.621 283.834l-3.855 2.226-103.991-180.118c-6.083-1.63-9.421-7.413-12.761-13.197-2.226-3.857-11.131-19.279-14.989-39.32 15.426 13.363 24.331 28.785 26.557 32.642 3.34 5.784 6.678 11.568 5.049 17.649l103.99 180.118z"
                          />
                          <path
                            fill="#B00"
                            d="M0 231.518h213.703c6.678 17.81 28.94 53.427 42.297 53.427 13.357 0 35.619-35.617 42.297-53.427H512V124.662H298.297c-6.678-17.81-28.94-53.427-42.297-53.427-13.357 0-35.619 35.617-42.297 53.427H0v106.856z"
                          />
                          <path d="M298.297 231.518c6.68-17.81 11.131-35.618 11.131-53.428 0-17.81-4.452-35.618-11.131-53.428-6.678 17.81-11.13 35.618-11.13 53.428 0 17.81 4.453 35.618 11.13 53.428zM213.703 231.518c-6.68-17.81-11.131-35.618-11.131-53.428 0-17.81 4.452-35.618 11.131-53.428 6.678 17.81 11.13 35.618 11.13 53.428 0 17.81-4.453 35.618-11.13 53.428z" />
                          <g fill="#fff">
                            <path d="M264.904 178.09c0-7.377-3.986-13.357-8.904-13.357-4.918 0-8.904 5.98-8.904 13.357 0 7.377 3.986 13.357 8.904 13.357 4.918 0 8.904-5.98 8.904-13.357z" />
                            <path d="M258.227 191.113s8.904 17.81 8.904 46.75-8.904 46.749-8.904 46.749v-93.499zM253.773 165.067s-8.904-17.81-8.904-46.75c0-28.941 8.904-46.749 8.904-46.749v93.499zM253.773 191.113s-8.904 17.81-8.904 46.75 8.904 46.749 8.904 46.749v-93.499zM258.227 165.067s8.904-17.81 8.904-46.75c0-28.941-8.904-46.749-8.904-46.749v93.499z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    KENYA OFFICE
                  </div>
                  <div className="flex gap-4 items-center px-3">
                    <i
                      className={`fal fa-location-dot text-blue text-lg   hover:bg-linear aspect-square`}
                    ></i>{" "}
                    Mirage Towers Building 7th Floor , Tower 2 Nairobi Kenya
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="heading text-button flex gap-2 items-center">
                    <div className="w-12 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 512 356.18"
                      >
                        <g fillRule="nonzero">
                          <path
                            fill="#00732F"
                            d="M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z"
                          />
                          <path
                            fill="#fff"
                            d="M512 118.726H0V328.04c0 15.477 12.663 28.14 28.137 28.14H483.86c15.477 0 28.14-12.663 28.14-28.14V118.726z"
                          />
                          <path d="M512 237.454H0v90.586c0 15.477 12.663 28.14 28.137 28.14H483.86c15.477 0 28.14-12.663 28.14-28.14v-90.586z" />
                          <path
                            fill="red"
                            d="M142.871 356.18V0H28.137C12.663 0 0 12.663 0 28.14v299.9c0 15.477 12.663 28.14 28.137 28.14h114.734z"
                          />
                        </g>
                      </svg>
                    </div>
                    DUBAI OFFICE
                  </div>
                  <div className="flex gap-4 items-center px-3">
                    <i
                      className={`fal fa-location-dot text-blue text-lg   hover:bg-linear aspect-square`}
                    ></i>{" "}
                    M-01- muteena street Above savarna bhavan Deira-Dubai
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-3">
                <div className="heading text-button flex gap-2 items-center">
                  <div className="w-12 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 356.18"
                    >
                      <path
                        fill="#E1000F"
                        d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"
                      />
                      <path
                        fill="#fff"
                        d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"
                      />
                      <path
                        fill="#273375"
                        d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"
                      />
                    </svg>
                  </div>
                  FRANCE OFFICE
                </div>
                <div className="flex gap-4 items-center px-3">
                  <i
                    className={`fal fa-location-dot text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>
                  Ultimate Concept Sarl 91 Rue Du Faubourg Saint Honoré 75008
                  Paris
                </div>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-3">
                <div className="heading text-button flex gap-2 items-center">
                  <div className="w-12 aspect-video border border-grey p-2 flex bg-white rounded-[50%] justify-center items-center ">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 55.2 38.4"
                      style={{ enableBackground: "new 0 0 55.2 38.4" }}
                      xmlSpace="preserve"
                    >
                      <style type="text/css">
                        {`.st0{fill:#FF0000;} .st1{fill:#FFFFFF;}`}
                      </style>
                      <g>
                        <path
                          className="st0"
                          d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"
                        />
                        <polygon
                          className="st1"
                          points="8.4,0 46.8,0 46.8,38.4 8.4,38.4 8.4,0"
                        />
                        <path
                          className="st0"
                          d="M27.6,3.6l-2.62,4.89c-0.3,0.53-0.83,0.48-1.37,0.18l-1.9-0.98l1.41,7.5c0.3,1.37-0.66,1.37-1.13,0.78 
        l-3.31-3.7l-0.53,1.88c-0.06,0.25-0.33,0.51-0.74,0.45l-4.18-0.88l1.1,4c0.24,0.89,0.42,1.26-0.24,1.49l-1.49,0.7l7.21,5.85 
        c0.29,0.22,0.43,0.62,0.32,0.98l-0.63,2.07c2.48-0.29,4.71-0.72,7.19-0.98c0.22-0.02,0.58,0.33,0.58,0.59L26.95,36h1.2l-0.19-7.56 
        c0-0.26,0.33-0.63,0.55-0.61c2.48,0.27,4.71,0.7,7.19,0.98l-0.64-2.08c-0.11-0.36,0.04-0.75,0.32-0.98l7.21-5.85l-1.49-0.7 
        c-0.66-0.24-0.48-0.6-0.24-1.49l1.1-4l-4.18,0.88c-0.41,0.06-0.68-0.2-0.74-0.45l-0.53-1.88l-3.31,3.7 
        c-0.47,0.59-1.42,0.59-1.13-0.78l1.41-7.5l-1.9,0.98c-0.53,0.3-1.07,0.34-1.37-0.18L27.6,3.6L27.6,3.6L27.6,3.6z M27.6,3.6 
        L27.6,3.6L27.6,3.6L27.6,3.6L27.6,3.6z"
                        />
                      </g>
                    </svg>
                  </div>
                  CANADA OFFICE
                </div>
                <div className="flex gap-4 items-center px-3">
                  <i
                    className={`fal fa-location-dot text-blue text-lg   hover:bg-linear aspect-square`}
                  ></i>{" "}
                  5625 Boileau Brossard, QC J4Z 1V4
                </div>
              </div>
              {/* <div className="footer-company-infor flex flex-col gap-5">
                <div className="caption1">
                  Welcome to Mobrilz! We provide diverse IT solutions with a
                  team of experts. From IT management to cloud solutions, we
                  have you covered.{" "}
                </div>
                <div className="caption1">
                  Mon - Fri: 10:00 - 18:00 <br />
                  Closed on Weekends{" "}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center gap-2 mx-2">
                <div className="copy-right text-surface1 caption1">
                  ©2024 Mobrilz. All Rights Reserved.
                </div>
                <b className="text-sm">"BAKING CODE SINCE 2014"</b>
              </div>
              <div className="nav-link flex items-center gap-2.5">
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Terms Of Services
                </Link>
                <span className="text-surface1 caption1">|</span>
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Privacy Policy
                </Link>
                <span className="text-surface1 caption1">|</span>
                <Link
                  className="text-surface1 caption1 hover-underline"
                  href="#!"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
