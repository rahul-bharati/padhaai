import type { NextPage } from "next";
import Image from "next/image";

import Breadcrumb from "../components/Breadcrumb";
import SideBar from "../components/SideBar";

import JEEMainImage from "../images/goals/jee-mains.svg";

const Goals: NextPage = () => {
  return (
    <section className="pt-2">
      <Breadcrumb />
      <section>
        <div className="container-fluid mx-auto">
          <div className="flex md:justify-end mb-6">
            <select
              id="country"
              name="country"
              className="w-24 block appearance-none py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option>All</option>
              <option>All</option>
              <option>All</option>
            </select>
          </div>
          <div className="flex -mx-3 flex-wrap">
            <div className="lg:w-1/4 w-full px-3 lg:mb-0 mb-6">
              <SideBar />
            </div>
            <div className="lg:w-3/4 w-full px-3">
              <div className="rounded-xl p-6 border">
                <div className="course">
                  <div className="mb-12">
                    <h5 className="text-black font-medium text-lg mb-3">
                      Folders
                    </h5>
                    <div className="flex flex-wrap -mx-3">
                      <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 px-3 mb-6 w-full">
                        <div className="shadow-lg py-6 px-4 rounded-md flex items-center justify-between border">
                          <Image
                            src={JEEMainImage}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Goals;
