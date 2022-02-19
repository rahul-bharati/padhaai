import type { NextComponentType } from "next";
import Link from "next/link";

const Breadcrumb: NextComponentType = () => {
  return (
    <section className="breadcrumb bg-yellowlight mt-16">
      <div className="container-fluid mx-auto py-4">
        <div>
          <Link href="#" passHref>
            <a>
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="sm:mb-0 mb-4 inline-block bg-theme px-4 py-4 font-medium rounded-full mx-3">
              Competitive Exams
            </a>
          </Link>
          <span className="font-medium text-xl">/</span>
          <Link href="#" passHref>
            <a className="inline-block bg-theme px-4 py-4 font-medium rounded-full mx-3">
              IIT JEE
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
