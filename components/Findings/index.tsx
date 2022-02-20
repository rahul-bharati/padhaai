import type { NextComponentType } from "next";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./style.module.scss";

const Findings: NextComponentType = () => {
  return (
    <>
      <div className="row bg-light-primary px-[60px] py-[100px] rounded-[80px]">
        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h4 className="lg:text-5xl font-semibold mb-20">
            This is what we <span className="text-primary">found:</span>
          </h4>
          <div className="mt-5 flex lg:justify-between justify-center flex-wrap w-[100%]">
            <div className="text-center mx-2 mb-4">
              <div className={styles["progress-circle"]}>
                <CircularProgressbarWithChildren
                  background
                  styles={{
                    path: {
                      stroke: "#f9c933",
                      strokeLinecap: "butt",
                    },
                    trail: {
                      stroke: "#ffffff",
                      strokeLinecap: "butt",
                    },
                    background: {
                      fill: "#ffffff",
                    },
                  }}
                  value={39}
                >
                  <span className="block font-semibold">Ask a friend</span>
                  <span className="block text-2xl font-bold">39%</span>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="text-center mx-2 mb-4">
              <div className={styles["progress-circle"]}>
                <CircularProgressbarWithChildren
                  background
                  styles={{
                    path: {
                      stroke: "#f9c933",
                      strokeLinecap: "butt",
                    },
                    trail: {
                      stroke: "#ffffff",
                      strokeLinecap: "butt",
                    },
                    background: {
                      fill: "#ffffff",
                    },
                  }}
                  value={16}
                >
                  <span className="block font-semibold">Search online</span>
                  <span className="block text-2xl font-bold">16%</span>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="text-center mx-2 mb-4">
              <div className="progressBar">
                <div className={styles["progress-circle"]}>
                  <CircularProgressbarWithChildren
                    background
                    styles={{
                      path: {
                        stroke: "#f9c933",
                        strokeLinecap: "butt",
                      },
                      trail: {
                        stroke: "#ffffff",
                        strokeLinecap: "butt",
                      },
                      background: {
                        fill: "#ffffff",
                      },
                    }}
                    value={8}
                  >
                    <span className="block font-semibold">Ask family</span>
                    <span className="block text-2xl font-bold">8%</span>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
            <div className="text-center mx-2 mb-4">
              <div className="progressBar">
                <div className={styles["progress-circle"]}>
                  <CircularProgressbarWithChildren
                    background
                    styles={{
                      path: {
                        stroke: "#f9c933",
                        strokeLinecap: "butt",
                      },
                      trail: {
                        stroke: "#ffffff",
                        strokeLinecap: "butt",
                      },
                      background: {
                        fill: "#ffffff",
                      },
                    }}
                    value={45}
                  >
                    <span className="block font-semibold px-4 inline-bolck">
                      Talk to the teacher
                    </span>
                    <span className="block text-2xl font-bold">45%</span>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
            <div className="text-center mx-2 mb-4">
              <div className="progressBar">
                <div className={styles["progress-circle"]}>
                  <CircularProgressbarWithChildren
                    background
                    styles={{
                      path: {
                        stroke: "#f9c933",
                        strokeLinecap: "butt",
                      },
                      trail: {
                        stroke: "#ffffff",
                        strokeLinecap: "butt",
                      },
                      background: {
                        fill: "#ffffff",
                      },
                    }}
                    value={31}
                  >
                    <span className="block font-semibold">Do nothing</span>
                    <span className="block text-2xl font-bold">31%</span>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="text-left mt-5 w-full block text-black py-3 px-6 md:text-3xl text-base font-normal">
            So we teamed up with thousands of tutors in the country, and we
            created <span className="text-primary font-bold">Gurucool</span>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Findings;
