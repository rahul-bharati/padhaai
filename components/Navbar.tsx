import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useToggle } from "./../hooks/useToggle";

import Logo from "../images/logo.png";

interface IDisplayStyle {
  display: string;
}

const Navbar: NextComponentType = () => {
  const [style, setStyle] = useState<IDisplayStyle>({ display: "none" });
  const [dropStyles, setDropStyle] = useState<IDisplayStyle>({
    display: "none",
  });
  const [dropstyle, setSubDropStyle] = useState<IDisplayStyle>({
    display: "none",
  });

  const [showMe, setShowMe] = useToggle(false);
  return (
    <>
      <header className="bg-black fixed top-0 left-0 w-full z-10 border-b-2 border-b-white">
        <div className="container-fluid mx-auto px-4 zeroVerticalPad py-6">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
              <Link href="/" passHref>
                <a>
                  <Image src={Logo} alt="" width={130} height={45} />
                </a>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <Link
                href="https://gurucool.xyz/index.php?link1=login-page&last_url=https://padhaai.gurucool.xyz/"
                passHref
              >
                <a className="bg-theme inline-block lg:hidden rounded px-4 py-1 font-medium text-black md:mr-12 mr-2">
                  Login
                </a>
              </Link>
              <button
                onClick={setShowMe}
                className="flex items-center px-3 py-2 border rounded text-white border-white"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className="w-full NavContainer block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end none"
              style={{
                display: showMe ? "block" : "none",
              }}
            >
              <Link href="https://about.gurucool.xyz/" passHref>
                <a className="block lg:inline-block text-white lg:px-6 py-4 hover:text-primary">
                  <span className="block text-sm uppercase text-theme">
                    &nbsp;
                  </span>
                  <span className="font-bold">About</span>
                </a>
              </Link>
              <Link href="https://group.gurucool.xyz/" passHref>
                <a className="block lg:inline-block lg:mt-0 text-white lg:px-6 py-4 hover:text-primary">
                  <span className="block text-sm uppercase text-theme">
                    Live
                  </span>
                  <span className="font-bold">Masterclass</span>
                </a>
              </Link>
              <div className="relative cursor-pointer ">
                <a
                  className="block lg:inline-block text-white lg:px-6 py-4 hover:text-primary"
                  onMouseEnter={(e) => {
                    setStyle({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  <span className="block text-sm uppercase text-theme">
                    Free
                  </span>
                  <span className="font-bold">
                    Study Material <i className="fas fa-chevron-down"></i>
                  </span>
                </a>
                <div
                  className="lg:absolute bg-theme w-64 dropdown-menu z-30"
                  style={style}
                  onMouseEnter={(e) => {
                    setStyle({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  <div className="relative">
                    <a
                      className="flex px-3 py-3 text-black justify-between items-center"
                      onMouseEnter={(e) => {
                        setDropStyle({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setDropStyle({ display: "none" });
                      }}
                    >
                      <span>Competitive Exams</span>
                      <i className="fas fa-chevron-right"></i>
                    </a>
                    <div
                      className="dropdown-submenu lg:absolute bg-theme w-64 bg-theme z-30"
                      onMouseEnter={(e) => {
                        setDropStyle({ display: "block" });
                      }}
                      onMouseLeave={(e) => {
                        setDropStyle({ display: "none" });
                      }}
                      style={dropStyles}
                    >
                      <div className="relative">
                        <a
                          className="flex px-3 py-3 text-black justify-between items-center"
                          onMouseEnter={(e) => {
                            setSubDropStyle({ display: "block" });
                          }}
                          onMouseLeave={(e) => {
                            setSubDropStyle({ display: "none" });
                          }}
                        >
                          <span>IIT JEE</span>
                          <i className="fas fa-chevron-right"></i>
                        </a>
                        <div
                          className="dropdown-submenu lg:absolute bg-theme w-64 bg-theme z-30"
                          style={dropstyle}
                          onMouseEnter={(e) => {
                            setSubDropStyle({ display: "block" });
                          }}
                          onMouseLeave={(e) => {
                            setSubDropStyle({ display: "none" });
                          }}
                        >
                          <a href="#" className="flex px-3 py-3 text-black">
                            JEE (Main)
                          </a>
                        </div>
                      </div>
                      <div className="relative">
                        <a className="flex px-3 py-3 text-black justify-between items-center">
                          <span>NEET</span>
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                      <div className="relative">
                        <a className="flex px-3 py-3 text-black justify-between items-center">
                          <span>Foreign Studies</span>
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                      <div className="relative">
                        <a className="flex px-3 py-3 text-black justify-between items-center">
                          <span>UPSC CSE</span>
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link href="#" passHref>
                      <a className="flex px-3 py-3 text-black justify-between items-center">
                        <span>Class 6 to 12</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="#" passHref>
                      <a
                        href="#"
                        className="flex px-3 py-3 text-black justify-between items-center"
                      >
                        <span>Skill India</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="https://asked.gurucool.xyz/" passHref>
                <a className="block lg:inline-block text-white lg:px-6 py-4 hover:text-primary">
                  <span className="block text-sm uppercase text-theme">
                    Hot
                  </span>
                  <span className="font-bold"> Solved Questions</span>
                </a>
              </Link>
              <Link href="/doubt-space" passHref>
                <a className="block lg:inline-block text-white lg:pl-6 lg:pr-12 py-4 hover:text-primary">
                  <span className="block text-sm uppercase text-theme">
                    &nbsp;
                  </span>
                  <span className="font-bold">Doubt Space</span>
                </a>
              </Link>
              <Link
                href="https://gurucool.xyz/index.php?link1=login-page&last_url=https://padhaai.gurucool.xyz/"
                passHref
              >
                <a className="bg-theme lg:inline-block hidden rounded px-12 py-3 font-medium">
                  Login
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
