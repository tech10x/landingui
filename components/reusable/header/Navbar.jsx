"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/icons/tech10x.webp";
import toggleIcon from "@/assets/icons/menu.webp";
import xmarkIcon from "@/assets/icons/cancel.png";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const currentPath = usePathname();

  // array of path and pathname
  const navItems = [
    {
      link: "Products",
      path: "/product",
    },
    {
      link: "Company",
      path: "/company",
    },
    {
      link: "Resources",
      path: "/resources",
    },
    {
      link: "Pricing",
      path: "/pricing",
    },
  ];

  // Active link handler
  const isActive = (thePath) => {
    return currentPath === thePath;
  };

  // Toggle Menu handler
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // if window width is grater than 767px then automaticaly close toggle.
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth > 767);
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // if user scroll on y access then navbar colour will be change.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu close on click over the link
  const closeToggle = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar body  */}
      <header
        id="navBar"
        className={`w-full  fixed top-0 left-0 right-0 ${isMenuOpen ? "bg-white" : "bg-transparent"
          }`}
      >
        <nav
          className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white" : ""
            }`}
        >
          <div className="flex justify-between items-center sm:mr-1">
            {/* Rendering logo  */}
            <Link
              href="/"
              className={
                "text-2xl font-bold text-black flex items-center gap-2"
              }
            >
              <Image
                src={brandLogo}
                alt="Tech10x logo"
                height={60}
                width={60}
                className={"inline-block"}
                loading="eager"
                priority={true}
              />
              Tech10x
            </Link>

            {/* Nav item for large device  */}
            <ul className={"md:flex space-x-12 hidden"}>
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  href={path}
                  className={`block text-sm align-center
                                 text-black uppercase cursor-pointer
                                 hover:text-blue-800 font-bold ${isActive(path) ? "link-active" : ""
                    }`}
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* Start free button  */}
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 btn"
            >
              Start Free
            </button>

            {/* Menu close button for mobile device  */}
            <div className={"md:hidden"}>
              <button onClick={toggleMenu} className={"focus:outline-none"}>
                {isMenuOpen ? (
                  <Image
                    src={xmarkIcon}
                    alt="close-menu"
                    height={40}
                    width={40}
                    loading="eager"
                    priority={true}
                  />
                ) : (
                  <Image
                    src={toggleIcon}
                    alt="open-menu"
                    height={40}
                    width={40}
                    loading="eager"
                    priority={true}
                  />
                )}
              </button>
            </div>

            {/* Navigation for small devices */}
            <div
              className={`space-y-4 px-4 mt-12 py-7 bg-white 
                       ${isMenuOpen
                  ? "block fixed top-5 right-0 left-0"
                  : "hidden"
                }`}
            >
              {navItems.map(({ link, path }) => (
                <button
                  key={path}
                  onClick={closeToggle}
                  className={`block text-sm mx-auto
                                text-blue-800 uppercase cursor-pointer items-center
                                hover:text-black font-bold ${isActive(path) ? "link-active" : ""
                    }`}
                >
                  <Link href={path}>{link}</Link>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationMenu;
