import type { NextComponentType } from "next";
import Link from "next/link";

const GurucoolCTA: NextComponentType = () => {
  return (
    <div className="w-full bg-primary">
      <section className="container-fluid mx-auto py-4 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-black">
          Want to know about <span className="font-bold">Gurucool?</span>
        </h2>
        <Link href="#" passHref>
          <a className="bg-black rounded text-white d-inline-block px-9 py-3 font-semibold text-2xl inline-block">
            Explore
          </a>
        </Link>
      </section>
    </div>
  );
};

export default GurucoolCTA;
