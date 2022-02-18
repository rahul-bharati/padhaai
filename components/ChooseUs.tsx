import type { NextComponentType } from "next";
import Image from "next/image";

import NeedImage from "../images/choose-us/need.webp";
import WhuChoose from "../images/choose-us/whu-choose.svg";
import Findings from "./Findings";

const ChooseUs: NextComponentType = () => {
  const percentage = 66;
  return (
    <>
      <section className="chooseusSection">
        <div className="container-fluid mx-auto">
          <div className="lg:flex -mx-6  mb-6">
            <div className="lg:w-[60%] px-6">
              <div className="">
                <h2 className="md:text-5xl text-4xl font-semibold mb-6">
                  Why{" "}
                  <div className="inline-block m-0 text-theme">Padhaai ?</div>
                </h2>
                <p className="md:text-2xl text-xl">
                  If we create a space for quality education and make it
                  expensive, we are only excluding most of the people.
                </p>
              </div>
            </div>
            <div className="lg:w-[40%] px-6">
              <Image
                src={WhuChoose}
                alt=""
                className="img-fluid"
                width={461}
                height={293}
              />
            </div>
          </div>
          <div className="lg:flex -mx-6 justify-center mb-12">
            <div className="lg:w-[40%] px-6 mb-mb-0 mb-5">
              <Image
                src={NeedImage}
                width={461}
                height={293}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="lg:w-[60%] px-6 text-md-start mb-md-0 mb-5 pt-10">
              <p className="lg:text-3xl	text-2xl text-slate-900 mb-4">
                Then we asked ourselves
              </p>
              <h3 className="mb-3 lg:text-4xl leading-tight font-medium	">
                &lsquo;How can we ensure free and quality education at the same
                time?&rsquo;
              </h3>
            </div>
          </div>
          <Findings />
        </div>
      </section>
    </>
  );
};
export default ChooseUs;
