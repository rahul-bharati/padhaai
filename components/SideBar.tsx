import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

import ClassroomImage from "../images/sidebar/classroom.svg";
import CourseImage from "../images/sidebar/course.svg";
import QuestionImage from "../images/sidebar/question.svg";
import StudyMaterialImage from "../images/sidebar/study-material.svg";
import TestSeriesImage from "../images/sidebar/test-series.svg";

const SideBar: NextComponentType = () => {
  return (
    <aside className="border p-6 rounded-xl sidebar-nav">
      <ul className="text-center">
        <li className="mb-9">
          <Link href="#" passHref>
            <a className="active block p-4 rounded-full">
              <Image src={CourseImage} alt="" width={25} height={25} /> Courses
            </a>
          </Link>
        </li>
        <li className="mb-9">
          <Link href="#" passHref>
            <a>
              <Image src={ClassroomImage} alt="" width={25} height={25} />{" "}
              Classroom
            </a>
          </Link>
        </li>
        <li className="mb-9">
          <Link href="#" passHref>
            <a>
              <Image src={StudyMaterialImage} alt="" width={25} height={25} />{" "}
              Study Material
            </a>
          </Link>
        </li>
        <li className="mb-9">
          <Link href="#" passHref>
            <a>
              <Image src={QuestionImage} alt="" width={25} height={25} />{" "}
              Q&amp;A
            </a>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <a>
              <Image src={TestSeriesImage} alt="" width={25} height={25} /> Test
              Series
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
