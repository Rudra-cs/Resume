import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkExperience from "./BuildTabs/WorkExperience";
import Skills from "./BuildTabs/Skills";
import PersonalInfo from "./BuildTabs/PersonalInfo";
import Projects from "./BuildTabs/Projects";
import Education from "./BuildTabs/Education";

const tabs = [
  "personalInfo",
  "workExperience",
  "skills",
  "education",
  "projects",
];
const Admin = () => {
  const navigate = useNavigate();

  // useEffect for going back to Home after back button is pressed
  useEffect(() => {
    const handlePopState = () => {
      navigate("/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  const [activeTab, setActiveTab] = useState("personalInfo");

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl m-5 font-semibold ">Resume Builder</h1>
      <div className="container mx-auto p-4 lg:max-w-screen-lg md:max-w-screen-xl flex-wrap">
        {/* Card-like container for tabs and content */}
        <div className="bg-gray-100/50 rounded-md shadow-md overflow-hidden">
          {/* Tabs for different resume sections */}
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 text-center ${
                  activeTab === tab
                    ? " text-blue-500 font-semibold border-b-2 border-blue-500"
                    : "border-b border-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content within the card */}
          <div className="p-4">
            {activeTab === "personalInfo" && <PersonalInfo />}
            {activeTab === "workExperience" && <WorkExperience />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "education" && <Education />}
            {activeTab === "projects" && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
