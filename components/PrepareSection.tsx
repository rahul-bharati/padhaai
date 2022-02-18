import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import LearningImage from "../images/prep/learning.svg";
import PrepLearningImage from "../images/prep/prep-learning.svg";

const PrepareSection: NextComponentType = () => {
  return (
    <section className="container-fluid mx-auto pt-0">
      <p className="text-base mt-4 mb-4">
        Padhaai offered in:{" "}
        <Link href="#" passHref>
          <a className="text-black">
            <strong>
              English <i className="fas fa-caret-down"></i>
            </strong>
          </a>
        </Link>
      </p>
      <div className="lg:flex mt-6 -mx-4">
        <div className="lg:w-1/2 px-4 w-full lg:mb-0 mb-6">
          <div className="overflow-hidden shadow-sm relative card bg-light-primary rounded-[40px]">
            <div className="px-6 py-6 lg:px-12">
              <div className="font-medium text-gray-600 text-xl mb-2">
                Prepare for
              </div>
              <h4 className="font-semibold text-black text-3xl">
                Competitive exams
              </h4>
              <p className="text-gray-500 md:mt-4 text-base font-normal">
                Popular goals
              </p>
              <ul className="md:mt-4 mb-sm-4 mb-5 min-h-48">
                <li className="inline-block lg:mr-5 mr-6">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/126"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      IIT JEE
                    </a>
                  </Link>
                </li>
                <li className="inline-block lg:mr-5 mr-6">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/127"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      NEET
                    </a>
                  </Link>
                </li>
                <li className="inline-block lg:mr-5 mr-6">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/128"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      Foreign Studies
                    </a>
                  </Link>
                </li>
                <li className="inline-block lg:mr-5 mr-6">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/129"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      {" "}
                      UPSC CSE
                    </a>
                  </Link>
                </li>
                <li className="inline-block lg:mr-5 mr-6">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/130"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      Govt Exams
                    </a>
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/131"
                    passHref
                  >
                    <a className="text-black md:font-semibold md:text-base text-sm">
                      CLAT
                    </a>
                  </Link>
                </li>
              </ul>
              <Link
                href="https://padhaai.gurucool.xyz/padhaai-gurucool"
                passHref
              >
                <a className="bg-theme tracking-wide md:text-lg text-base rounded text-white md:px-9 px-3 md:py-4 py-2 inline-block">
                  Start Learning
                </a>
              </Link>
              <div className="absolute bottom-0 right-0">
                <Image
                  src={PrepLearningImage}
                  alt="Competitive exams"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-4 w-full">
          <div className="overflow-hidden shadow-sm relative card bg-light-primary rounded-[40px]">
            <div className="px-6 py-6 lg:px-12">
              <div className="font-medium text-gray-600 text-xl mb-2">
                Prepare for
              </div>
              <h4 className="font-semibold text-black text-3xl">
                Class 6 to 12
              </h4>
              <p className="text-gray-500 md:mt-4 text-base font-normal">
                Popular goals
              </p>
              <ul className="md:mt-4 mb-sm-4 mb-5 min-h-48">
                <li className="inline-block lg:mr-5 mr-3">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-goal/110"
                    passHref
                  >
                    <a className="text-black md:font-semibold">Class 10</a>
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    href="https://padhaai.gurucool.xyz/padhaai-gurucool?class=12"
                    passHref
                  >
                    <a className="text-black md:font-semibold">Class 12</a>
                  </Link>
                </li>
              </ul>
              <Link
                href="https://padhaai.gurucool.xyz/padhaai-gurucool?class=12"
                passHref
              >
                <a className="bg-theme tracking-wide md:text-lg text-base rounded text-white md:px-9 px-3 md:py-4 py-2 inline-block">
                  Start Learning
                </a>
              </Link>
              <div className="absolute bottom-0 right-0">
                <Image
                  src={LearningImage}
                  alt="Class 6 to 12"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareSection;
