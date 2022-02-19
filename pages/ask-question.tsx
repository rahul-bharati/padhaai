import type { NextPage } from "next";
import Image from "next/image";

import Masterclass1Image from "../images/ask-questions/master-class-1.png";

const AskQuestion: NextPage = () => {
  return (
    <section className="container-fluid mx-auto">
      <div className="lg:w-3/4 mx-auto pt-16">
        <div className="bg-white p-8 drop-shadow-lg  rounded-2xl py-12 px-4 border">
          <h3 className="md:text-2xl text-xl font-medium mb-6">
            Ask a question about your assignment{" "}
          </h3>
          <div className="flex flex-1">
            <textarea
              className="resize-none bg-gray-100 h-48 flex flex-1 border rounded-xl p-4"
              placeholder="Write your question here"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <div className="rounded-xl bg-slate-100  mt-8 w-16 h-16 flex justify-center">
              <Image src={Masterclass1Image} width={80} height={80} alt="" />
            </div>
            <div className="rounded-xl bg-slate-100 mt-8 w-16 h-16 flex justify-center">
              <Image src={Masterclass1Image} width={80} height={80} alt="" />
            </div>
            <div className="rounded-xl bg-slate-100 mt-8 w-16 h-16 flex justify-center">
              <a
                href="javascript:void(0)"
                className="text-gray-600 flex items-center justify-center"
              >
                <i className="fas fa-plus text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="mt-8 flex gap-8 flex-wrap">
            <select
              id="country"
              name="country"
              className="w-36 block appearance-none py-4 px-6 text-gray-600 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option>Pick a topic</option>
              <option>Pick a topic</option>
            </select>
            <a
              href="javascript:"
              className="flex justify-center w-40 py-4 text-center rounded-full bg-theme text-bold  "
            >
              <p className="text-center">Ask your doubt</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
