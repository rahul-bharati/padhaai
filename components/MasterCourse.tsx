import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaCalendar } from "react-icons/fa";

import MasterClass1Image from "../images/subjects/master-class-1.png";

const MasterCourse: NextComponentType = () => {
  return (
    <div className="subject-list mb-9">
      <div className="flex justify-between mb-4">
        <h5 className="text-black font-medium text-lg">Live Masterclasses</h5>
        <Link href="#" passHref>
          <a>See All</a>
        </Link>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={MasterClass1Image} width={243} height={178} alt="" />
            </div>
            <Link href="#" passHref>
              <a className="text-sm inline-block bg-gray-200 py-1 px-3">
                English
              </a>
            </Link>
            <h4 className="font-semibold text-lg text-gray-900">
              Complete physics course - class 12th
            </h4>
            <span className="text-sm text-gray-400">
              <FaCalendar className="inline-block" /> Started on 15 December,
              2021
            </span>
            <div className="flex justify-between mt-2 items-center">
              <span className="text-gray-400 text-sm">
                By <span className="text-themeColor">Mohammad Omar</span>
              </span>
              <Link href="#" passHref>
                <a className="bg-themeColor inline-block rounded-full px-3 text-sm font-medium py-1">
                  Join
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={MasterClass1Image} width={243} height={178} alt="" />
            </div>
            <Link href="#" passHref>
              <a className="text-sm inline-block bg-gray-200 py-1 px-3">
                English
              </a>
            </Link>
            <h4 className="font-semibold text-lg text-gray-900">
              Complete physics course - class 12th
            </h4>
            <span className="text-sm text-gray-400">
              <FaCalendar className="inline-block" /> Started on 15 December,
              2021
            </span>
            <div className="flex justify-between mt-2 items-center">
              <span className="text-gray-400 text-sm">
                By <span className="text-themeColor">Mohammad Omar</span>
              </span>
              <Link href="#" passHref>
                <a className="bg-themeColor inline-block rounded-full px-3 text-sm font-medium py-1">
                  Join
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={MasterClass1Image} width={243} height={178} alt="" />
            </div>
            <Link href="#" passHref>
              <a className="text-sm inline-block bg-gray-200 py-1 px-3">
                English
              </a>
            </Link>
            <h4 className="font-semibold text-lg text-gray-900">
              Complete physics course - class 12th
            </h4>
            <span className="text-sm text-gray-400">
              <FaCalendar className="inline-block" /> Started on 15 December,
              2021
            </span>
            <div className="flex justify-between mt-2 items-center">
              <span className="text-gray-400 text-sm">
                By <span className="text-themeColor">Mohammad Omar</span>
              </span>
              <Link href="#" passHref>
                <a className="bg-themeColor inline-block rounded-full px-3 text-sm font-medium py-1">
                  Join
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MasterCourse;
