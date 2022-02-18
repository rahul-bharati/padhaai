import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

import HighlightFreeCourse from "../images/features/highlightfreecourses.svg";
import HighlightGoals from "../images/features/highlightgoals.svg";
import HightlightLive from "../images/features/highlightlive.svg";
import HighlightMinSwatched from "../images/features/highlightminswatched.svg";
import HighlightEducators from "../images/features/hightlighteducators.svg";

const Feature: NextComponentType = () => {
  return (
    <>
      <section className="featuresSection bg-light-primary">
        <div className="container-fluid mx-auto">
          <div className="lg:flex -mx-6 items-center">
            <div className="lg:w-1/2 px-6 w-full lg:mb-4 mb-6">
              <div className="">
                <h2 className="md:text-5xl text-3xl font-semibold lg:leading-tight mb-4">
                  Start learning with Gurucool
                </h2>
                <p className="text-lg text-slate-900 font-normal mb-4">
                  Get unlimited access to structured courses &amp; doubt
                  clearing sessions
                </p>
                <Link
                  href="https://padhaai.gurucool.xyz/padhaai-gurucool"
                  passHref
                >
                  <a className="inline-block px-9 py-4 bg-theme rounded tracking-wide text-xl font-semibold">
                    Start learning
                  </a>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 px-6 w-full">
              <div className="md:flex -mx-6 flex-wrap">
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow shadow-[#000000]/[0.05] relative rounded-[10px] p-4 mb-4 overflow-hidden">
                    <div className="text-lg text-slate-600">
                      Cool categories
                    </div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      100 <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute -bottom-[8px] -right-[2px]">
                      <Image
                        src={HighlightGoals}
                        alt="Cool Categories"
                        width={284}
                        height={180}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow shadow-[#000000]/[0.05] relative rounded-[10px] p-4 mt-6 mb-4 overflow-hidden">
                    <div className="text-lg text-slate-600">Campus</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      5k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute -bottom-[8px] -right-[2px]">
                      <Image
                        src={HighlightEducators}
                        alt="Campus"
                        width={284}
                        height={180}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow shadow-[#000000]/[0.05] relative rounded-[10px] p-4 lg:-mt-4 overflow-hidden">
                    <div className="text-lg text-slate-600">
                      Daily live classes
                    </div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      1.5k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute -bottom-[8px] -right-[2px]">
                      <Image
                        src={HightlightLive}
                        alt=""
                        width={284}
                        height={180}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-6 w-full mt-4">
                  <div className="bg-white shadow shadow-[#000000]/[0.05] relative rounded-[10px] p-4 overflow-hidden">
                    <div className="text-lg text-slate-600">Video lessons</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      1M <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute -bottom-[8px] -right-[2px]">
                      <Image
                        src={HighlightFreeCourse}
                        alt=""
                        width={284}
                        height={180}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 px-6 w-full">
                  <div className="bg-white shadow shadow-[#000000]/[0.05] relative rounded-[10px] p-4 mt-4 lg:-mt-4 overflow-hidden">
                    <div className="text-lg text-slate-600">Community</div>
                    <h4 className="mt-2 text-4xl font-bold pb-20">
                      300k <span className="text-theme">+</span>
                    </h4>
                    <div className="absolute -bottom-[8px] -right-[2px]">
                      <Image
                        src={HighlightMinSwatched}
                        alt=""
                        width={284}
                        height={180}
                      />
                    </div>
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

export default Feature;
