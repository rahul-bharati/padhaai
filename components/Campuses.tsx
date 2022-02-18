import type { NextComponentType } from "next";
import Image from "next/image";

import CampuseImages from "../images/campuses-universities.png";

const Campuses: NextComponentType = () => {
  return (
    <section className="container-fluid mx-auto">
      <div className="w-full">
        <Image src={CampuseImages} width={1280} height={495} alt="" />
      </div>
    </section>
  );
};

export default Campuses;
