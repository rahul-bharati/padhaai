import type { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import PadhaaiImage from "../images/home/padhaai-img.png";
import JEEMainsImage from "../images/goals/jee-mains.svg";

const Home: NextPage = () => {
  return (
    <>
      <section className="bg-yellowlight">
        <div className="container-fluid mx-auto">
          <div className="lg:flex mb-4 -mx-3 lg:items-center lg:justify-between">
            <div className="lg:w-1/2 w-full px-3 lg:mb-0 mb-9">
              <h1 className="text-black leading-tight lg:text-6xl text-4xl font-semibold mb-9">
                Choose Your Padhaaई
              </h1>
              <p className="text-black mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia aut deserunt culpa incidunt sequi quaerat impedit
                dolorem quam fugit, doloremque, blanditiis autem cumque et
                illum?
              </p>
              <label className="relative block">
                <input
                  className="placeholder:text-slate-600 block bg-white w-full border border-themeColor rounded-full py-6 pl-9 pr-3 shadow-sm focus:outline-none focus:border-themeColor focus:ring-themeColor focus:ring-1"
                  placeholder="Search for"
                  type="text"
                  name="search"
                />
                <span className="absolute text-center inset-y-0 right-2 top-2 w-14 h-14 flex items-center justify-center bg-themeColor rounded-full">
                  <FaSearch className="text-2xl text-white inline-block" />
                </span>
              </label>
            </div>
            <div className="lg:w-1/2 px-3 w-full lg:text-right">
              <Image src={PadhaaiImage} alt="" width={500} height={479} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid mx-auto">
          <div className="flex md:justify-end mb-6">
            <select
              id="country"
              name="country"
              className="w-36 block appearance-none py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option>My Goals</option>
              <option>My Goals</option>
              <option>My Goals</option>
            </select>
          </div>
          <div className="tabs">
            <ul className="">
              <li className="sm:inline-block mr-6">
                <Link href="#" passHref>
                  <a className="text-themeColor active border-x border-t md:border-b-white border-b bg-white p-3 block md:rounded-t-md font-medium">
                    Competitive Exams
                  </a>
                </Link>
              </li>
              <li className="sm:inline-block mr-6 md:py-0 py-3">
                <Link href="#" passHref>
                  <a>Class 6 to 12</a>
                </Link>
              </li>
              <li className="sm:inline-block md:py-0 py-3">
                <Link href="#" passHref>
                  <a>Skill India</a>
                </Link>
              </li>
            </ul>
            <div className="tab-content border p-6">
              <div className="lg:flex">
                <div className="lg:w-5/6">
                  <div className="course">
                    <div className="mb-12">
                      <h5 className="text-black font-medium text-lg mb-3">
                        IIT
                      </h5>
                      <div className="flex flex-wrap -mx-3">
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              JEE(Main)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12">
                      <h5 className="text-black font-medium text-lg mb-3">
                        NEET
                      </h5>
                      <div className="flex flex-wrap -mx-3">
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              NEET (Foundation)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12">
                      <h5 className="text-black font-medium text-lg mb-3">
                        Foreign Studies
                      </h5>
                      <div className="flex flex-wrap -mx-3">
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              IELTS
                            </span>
                          </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              TOEFL
                            </span>
                          </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              GRE
                            </span>
                          </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              GMAT
                            </span>
                          </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                          <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                            <Image
                              src={JEEMainsImage}
                              alt=""
                              width={50}
                              height={50}
                            />
                            <span className="text-black font-medium text-sm">
                              SAT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/12">
                  <div className="bg-gray-100 p-6">
                    <ul className="list-disc pl-3 font-medium">
                      <li className="text-themeColor">
                        <Link href="#" passHref>
                          <a>IIT JEE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <a>NEET</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <a>Foreign Studies</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <a>UPSE CSE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <a>Govt Exams</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" passHref>
                          <a>CLAT</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
