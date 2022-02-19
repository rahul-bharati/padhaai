import type { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";

import GooglePlayImage from "../images/google-play.png";
import DownloadImage from "../images/download.png";

const Download: NextComponentType = () => {
  return (
    <>
      <section className="slider-section pt-10">
        <div className="container-fluid mx-auto overflow-hidden">
          <div className="lg:flex mb-4 -mx-3 lg:items-center bg-primary px-4 sm:px-[60px] pt-[100px] rounded-[50px] justify-between">
            <div className="lg:w-[60%] w-full px-3 lg:mb-0 mb-9 pb-[50px]">
              <h2 className="text-black leading-tight lg:text-[42px] text-4xl font-bold mb-5">
                Get the learning app
              </h2>
              <p className="md:text-2xl text-xl mb-9">
                Download lessons and learn anytime, anywhere with the Padhaai
                app
              </p>
              <Link href="#" passHref>
                <a className="rounded text-black d-inline-block font-semibold text-lg inline-block">
                  <Image
                    src={GooglePlayImage}
                    width={145}
                    height={41}
                    alt="Download from google play"
                  />
                </a>
              </Link>
            </div>
            <div className="lg:w-[40%] px-3 w-full relative h-full">
              <div className="min-h-[300px] w-full relative">
                <div className="lg:absolute -bottom-[2%] right-0 w-full">
                  <Image src={DownloadImage} height={507} width={377} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
