import type { NextComponentType } from "next";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import Class1Image from "../images/subjects/class-1.png";

const RecommendedSubjects: NextComponentType = () => {
  return (
    <div className="subject-list mb-9">
      <div className="mb-4">
        <h5 className="text-black font-medium text-lg">Recommended For You</h5>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6 flex">
            <div className="card-img text-center">
              <Image src={Class1Image} width={120} height={120} alt="" />
            </div>
            <div className="ml-3">
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
                <h5 className="text-black text-lg font-semibold">
                  Free{" "}
                  <sup className="text-gray-400">
                    <del>Rs. 450</del>
                  </sup>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full px-2">
          <div className="rounded-xl border p-3 mb-6 flex">
            <div className="card-img text-center">
              <Image src={Class1Image} width={120} height={120} alt="" />
            </div>
            <div className="ml-3">
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
                <h5 className="text-black text-lg font-semibold">
                  Free{" "}
                  <sup className="text-gray-400">
                    <del>Rs. 450</del>
                  </sup>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSubjects;
