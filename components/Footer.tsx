import type { NextComponentType } from "next";
import Image from "next/image";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaQuora,
  FaGlobe,
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";

import Logo from "../images/logo.png";

const Footer: NextComponentType = () => {
  return (
    <>
      <footer className="bg-black footer">
        <div className="container-fluid mx-auto pb-6">
          <div className="lg:flex justify-between items-center border-b pb-3 mb-12">
            <div className="lg:w-1/2">
              <ul className="flex">
                <li className="mr-3 text-white">Follow us</li>
                <li className="mr-3">
                  <a target="_blank" href="#" className="text-theme text-xl">
                    <FaInstagram />
                  </a>
                </li>
                <li className="mr-3">
                  <a target="_blank" href="#" className="text-theme text-xl">
                    <FaTwitter />
                  </a>
                </li>
                <li className="mr-3">
                  <a target="_blank" href="#" className="text-theme text-xl">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="mr-3">
                  <a target="_blank" href="#" className="text-theme text-xl">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="mr-3">
                  <a target="_blank" href="#" className="text-theme text-xl">
                    <FaQuora />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:text-right">
              <ul className="flex lg:justify-end items-center lg:mt-0 mt-6">
                <li className="mr-3">
                  <a href="#" className="text-theme text-xl">
                    <FaGlobe />
                  </a>
                </li>
                <li className="">
                  <select className="py-2 px-4 rounded">
                    <option>English</option>
                    <option>हिंदी</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/3 md:mb-0 mb-6">
              <h4 className="fw-medium text-theme text-xl mb-3">
                <span>More about us</span>{" "}
                <FaChevronDown className="block md:hidden" />
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Supporters
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm">
                    Sail with Guruship
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 md:mb-0 mb-6">
              <h4 className="fw-medium text-theme text-xl mb-3">
                <span>Help Center</span>{" "}
                <FaChevronDown className="block md:hidden" />
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Gurucool.xyz
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Padhaai
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Gurucool Coaching
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Home Tuition
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h4 className="fw-medium text-theme text-xl mb-3">
                <span>Policy</span>{" "}
                <FaChevronDown className="block md:hidden" />
              </h4>
              <ul className="footerLink">
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Data Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    Community Standards
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white text-sm">
                    How our Business Works
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 mt-9">
            <ul>
              <li className="inline-block align-middle">
                <a href="#" className="block pr-2 pt-1">
                  <Image src={Logo} alt="" width={120} height={42} />
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  <FaQuestionCircle className="inline" /> Help
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  Privacy
                </a>
              </li>
              <li className="inline-block">
                <a href="#" className="text-white px-2">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
