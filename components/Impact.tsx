import type { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";

import ImpactImage from "../images/impactabnner.png";

const Impact: NextComponentType = () => {
  return (
    <>
      <section className="slider-section">
        <div className="container-fluid mx-auto">
          <div className="flex flex-col md:flex-row mb-4 -mx-3 justify-center lg:items-center">
            <div className="lg:w-[60%] w-full px-3 lg:mb-0 mb-9">
              <h2 className="text-black leading-tight lg:text-[56px] text-4xl font-bold mb-9">
                A moonshot
                <br />
                becomes a<br />
                movement.
              </h2>
              <p className="md:text-2xl text-xl mb-9">
                Unveiling edX&apos;s 10 year Impact Report.
              </p>
              <Link href="#" passHref>
                <a className="bg-theme rounded text-black d-inline-block px-9 py-4 font-semibold text-lg inline-block">
                  Read our Impact Report
                </a>
              </Link>
            </div>
            <div className="lg:w-[40%] px-3 w-full">
              <Image src={ImpactImage} width={492} height={399} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
