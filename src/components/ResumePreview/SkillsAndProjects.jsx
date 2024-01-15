import { FaLink } from "react-icons/fa";
import SkillsChips from "./SkillsChips";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SkillsAndProjects = ({ skills, projects }) => (
  <div className="md:flex  flex-col w-1/2">
    <div className="md:w-full pr-4 mb-4 md:mb-0">
      <h2 className="text-xl font-medium mb-2 uppercase font-poppins">
        Skills
      </h2>
      <SkillsChips skills={skills} />
    </div>

    <div className="md:w-full pr-4 mt-6">
      <h2 className="text-xl font-medium mb-2 uppercase font-poppins">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-justify">
            {project.title}
          </h3>

          <div className="flex items-center justify-start">
            <FaLink className="h-3 w-3 text-gray-500 mr-1" />
            <Link
              className="text-sm hover:text-blue-500"
              to={`${project.link}`}
            >
              {`[${project.link}]`}
            </Link>
          </div>

          <div className="leading-tight">
            {project.description?.map((desc, index) => (
              <div key={index} className="flex">
                <p className="mr-1">{`▪`}</p>
                <p key={index} className="text-gray-900 text-justify">
                  {`${desc}`}
                </p>
              </div>
            ))}
          </div>

          <div className="flex">
            <p className="text-sm font-normal italic text-gray-500">
              Tech Used:{" "}
            </p>
            <p className="ml-1 text-sm font-normal  text-gray-800 " key={index}>
              {project.skills}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsAndProjects;
