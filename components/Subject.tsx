import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import SubjectImage from "../images/subjects/subject-1.png";

const Subject: NextComponentType = () => {
  return (
    <div className="subject-list mb-9">
      <div className="flex justify-between mb-4">
        <h5 className="text-black font-medium text-lg">Folders</h5>
        <Link href="#">
          <a>See All</a>
        </Link>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={SubjectImage} width={243} height={178} alt="" />
            </div>
            <span className="text-sm text-gray-500 block">Physics</span>
            <h4 className="font-semibold text-lg">12th Class physics</h4>
            <div className="rating">
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-gray-400 text-sm" />
              <span className="text-sm ml-3">4.3k reviews</span>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-black text-lg font-semibold">Free</h5>
              <Link href="#" passHref>
                <a className="text-sm inline-block bg-gray-300 py-1 px-3">
                  English
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={SubjectImage} width={243} height={178} alt="" />
            </div>
            <span className="text-sm text-gray-500 block">Physics</span>
            <h4 className="font-semibold text-lg">12th Class physics</h4>
            <div className="rating">
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-gray-400 text-sm" />
              <span className="text-sm ml-3">4.3k reviews</span>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-black text-lg font-semibold">Free</h5>
              <Link href="#" passHref>
                <a className="text-sm inline-block bg-gray-300 py-1 px-3">
                  English
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={SubjectImage} width={243} height={178} alt="" />
            </div>
            <span className="text-sm text-gray-500 block">Physics</span>
            <h4 className="font-semibold text-lg">12th Class physics</h4>
            <div className="rating">
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-gray-400 text-sm" />
              <span className="text-sm ml-3">4.3k reviews</span>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-black text-lg font-semibold">Free</h5>
              <Link href="#" passHref>
                <a className="text-sm inline-block bg-gray-300 py-1 px-3">
                  English
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6">
            <div className="card-img text-center">
              <Image src={SubjectImage} width={243} height={178} alt="" />
            </div>
            <span className="text-sm text-gray-500 block">Physics</span>
            <h4 className="font-semibold text-lg">12th Class physics</h4>
            <div className="rating">
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-themeColor text-sm" />
              <FaStar className="inline-block text-gray-400 text-sm" />
              <span className="text-sm ml-3">4.3k reviews</span>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <h5 className="text-black text-lg font-semibold">Free</h5>
              <Link href="#" passHref>
                <a className="text-sm inline-block bg-gray-300 py-1 px-3">
                  English
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
