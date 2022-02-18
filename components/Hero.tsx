import type { NextComponentType } from "next";

import PrepareSection from "./PrepareSection";
import Lottie from "lottie-react";

import animationData from "../lotties/sliderlottie.json";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="slider-section">
        <div className="container-fluid mx-auto pb-0">
          <div className="lg:flex mb-4 -mx-3 lg:items-center">
            <div className="lg:w-[60%] w-full px-3 lg:mb-0 mb-9">
              <h1 className="text-black leading-tight lg:text-[56px] text-4xl font-bold mb-9">
                India&apos;s Largest
                <br />
                Free Learning Platform.
              </h1>
              <Link href="https://padhaai.gurucool.xyz/?link1=padhaai" passHref>
                <a className="bg-theme rounded text-black d-inline-block px-9 py-4 font-semibold text-lg">
                  Explore
                </a>
              </Link>
            </div>
            <div className="lg:w-[40%] px-3 w-full">
              <Lottie animationData={animationData} loop autoPlay />
            </div>
          </div>
        </div>
        <PrepareSection />
      </section>
    </>
  );
};
export default Hero;
