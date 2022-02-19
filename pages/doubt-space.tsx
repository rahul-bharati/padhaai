import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import DoubtImage from "../images/doubt/doubt.svg";

const DoubtSpace: NextPage = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid mx-auto">
        <div className="md:grid grid-cols-2 md:gap-12 gap-18 pt-10">
          <div className="">
            <h3 className="xl:leading-normal lg:leading-snug md:leading-normal xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-bold">
              Connect to a tutor in just
              <span className="text-theme"> 60 Seconds</span>
            </h3>
            <p className="text-lg text-gray-500 my-3">
              Gurucool is a 24/7 friend you can call whenever you need help with
              studiying
            </p>
            <Link href="/ask-question">
              <a className="inline-block py-3 font-semibold rounded-full bg-theme text-black text-lg px-6 mt-4 ">
                Ask your doubt
              </a>
            </Link>
          </div>
          <div className=" mt-6 md:mt-0 ">
            <Image src={DoubtImage} width={668} height={652} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSpace;
