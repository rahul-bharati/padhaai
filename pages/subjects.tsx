import type { NextPage } from "next";
import Breadcrumb from "../components/Breadcrumb";
import SideBar from "./../components/SideBar";
import Subject from "../components/Subject";
import RecommendedSubjects from "../components/RecommendedSubjects";
import MasterCourse from "../components/MasterCourse";

const Subjects: NextPage = () => {
  return (
    <div className="pt-2">
      <Breadcrumb />
      <section>
        <div className="container-fluid mx-auto">
          <div className="flex md:justify-end mb-6">
            <select
              id="country"
              name="country"
              className="w-24 block appearance-none py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option>All</option>
              <option>All</option>
              <option>All</option>
            </select>
          </div>
          <div className="flex -mx-3 flex-wrap">
            <div className="lg:w-1/4 w-full px-3 lg:mb-0 mb-6">
              <SideBar />
            </div>
            <div className="lg:w-3/4 w-full px-3">
              <div className="rounded-xl p-6 border">
                <Subject />
                <RecommendedSubjects />
                <MasterCourse />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subjects;
