import type { NextComponentType } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import MasterClassImage from "../images/masterclassMan.jpg";

const Masterclass: NextComponentType = () => {
  return (
    <>
      <section className="slider-section bg-black">
        <div className="container-fluid mx-auto overflow-x-hidden">
          <h2 className="text-2xl md:text-[52px] font-bold text-white flex md:pb-[50px] pb-[10px]">
            <span className="text-primary inline-block">Gurucool&nbsp;</span>
            Originals&nbsp;<sup className="text-sm md:text-lg">Free</sup>
          </h2>
          <div className="pt-[30px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative card-item lg:mb-0 mb-6 rounded-[30px] overflow-hidden">
                  <Image
                    src={MasterClassImage}
                    alt=""
                    className="img-fluid rounded"
                    layout="responsive"
                    objectFit="cover"
                    width={259}
                    height={370}
                  />
                  <div className="imgOverly rounded flex flex-col z-20 justify-end text-center pb-12">
                    <h2 className="text-white m-0 text-2xl font-bold tracking-wide">
                      Mohd Anas
                    </h2>
                    <hr className="w-1/4 mx-auto my-4 border-2 bg-white" />
                    <p className="m-0 text-white text-lg">
                      Teaches Leading Winning Teams
                    </p>
                  </div>
                  <p className="text-black bg-white absolute top-[20px] left-[20px] z-40 px-2 py-[2px] text-sm rounded-full block">
                    new
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card-item lg:mb-0 mb-6 rounded-[30px] overflow-hidden">
                  <Image
                    src={MasterClassImage}
                    alt=""
                    className="img-fluid rounded"
                    layout="responsive"
                    objectFit="cover"
                    width={259}
                    height={370}
                  />
                  <div className="imgOverly rounded flex flex-col z-20 justify-end text-center pb-12">
                    <h2 className="text-white m-0 text-2xl font-bold tracking-wide">
                      Mohd Anas
                    </h2>
                    <hr className="w-1/4 mx-auto my-4 border-2 bg-white" />
                    <p className="m-0 text-white text-lg">
                      Teaches Leading Winning Teams
                    </p>
                  </div>
                  <p className="text-black bg-white absolute top-[20px] left-[20px] z-40 px-2 py-[2px] text-sm rounded-full block">
                    new
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card-item lg:mb-0 mb-6 rounded-[30px] overflow-hidden">
                  <Image
                    src={MasterClassImage}
                    alt=""
                    className="img-fluid rounded"
                    layout="responsive"
                    objectFit="cover"
                    width={259}
                    height={370}
                  />
                  <div className="imgOverly rounded flex flex-col z-20 justify-end text-center pb-12">
                    <h2 className="text-white m-0 text-2xl font-bold tracking-wide">
                      Mohd Anas
                    </h2>
                    <hr className="w-1/4 mx-auto my-4 border-2 bg-white" />
                    <p className="m-0 text-white text-lg">
                      Teaches Leading Winning Teams
                    </p>
                  </div>
                  <p className="text-black bg-white absolute top-[20px] left-[20px] z-40 px-2 py-[2px] text-sm rounded-full block">
                    new
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative card-item lg:mb-0 mb-6 rounded-[30px] overflow-hidden">
                  <Image
                    src={MasterClassImage}
                    alt=""
                    className="img-fluid rounded"
                    layout="responsive"
                    objectFit="cover"
                    width={259}
                    height={370}
                  />
                  <div className="imgOverly rounded flex flex-col z-20 justify-end text-center pb-12">
                    <h2 className="text-white m-0 text-2xl font-bold tracking-wide">
                      Mohd Anas
                    </h2>
                    <hr className="w-1/4 mx-auto my-4 border-2 bg-white" />
                    <p className="m-0 text-white text-lg">
                      Teaches Leading Winning Teams
                    </p>
                  </div>
                  <p className="text-black bg-white absolute top-[20px] left-[20px] z-40 px-2 py-[2px] text-sm rounded-full block">
                    new
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Masterclass;
