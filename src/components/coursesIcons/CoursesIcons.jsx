import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import "./CoursesIcons.css";

function CoursesIcons() {
  return (
    <>
      <div className="coursesIconContainer">
        <div className="container">
          <h2>دنبال چه آموزشی میگردی؟</h2>
          <div className="courseIconsList">
            <div className="courseIcon">
              <FaReact />
            </div>
            <div className="courseIcon">
              <RiNextjsFill />
            </div>
            <div className="courseIcon">
              <FaNodeJs />
            </div>
            <div className="courseIcon">
              <IoLogoJavascript />
            </div>
            <div className="courseIcon">
              <FaBootstrap />
            </div>
            <div className="courseIcon">
              <RiTailwindCssFill />
            </div>
            <div className="courseIcon">
              <SiMongodb />
            </div>
            <div className="courseIcon">
              <SiMysql />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesIcons;
