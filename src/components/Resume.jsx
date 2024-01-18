/* eslint-disable react/prop-types */
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"; // Import icons
import ContactInfo from "./ResumePreview/ContactInfo";
import SkillsAndProjects from "./ResumePreview/SkillsAndProjects";
import EducationAndExperience from "./ResumePreview/EducationAndExperience";
import { useRecoilValue } from "recoil";
import { dataState } from "../atoms/ResumeAtom";
import { usePDF } from "react-to-pdf";

const Resume = () => {
  const data = useRecoilValue(dataState);
  const { toPDF, targetRef } = usePDF({
    filename: "RudraBehera_Resume.pdf",
    options: { paperSize: "A3" },
  });

  const contactInfo = [
    { icon: <FaEnvelope />, label: `${data?.personalInformation.email}` },
    { icon: <FaPhone />, label: `${data?.personalInformation.phoneNo}` },
    {
      icon: <FaMapMarkerAlt />,
      label: `${data?.personalInformation.location}`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: `${data?.personalInformation.linkedIn}`,
    },
  ];

  return (
    <div className="bg-gray-100 font-sans min-h-screen  ">
      <div className="container mx-auto py-8 px-4  max-w-screen-md ">
        <div
          ref={targetRef}
          className="bg-white p-6 rounded-xl shadow-lg border border-slate-300"
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold ">
              {data?.personalInformation.name}
            </h1>
            <p className="text-gray-600 text-base font-normal font-poppins">
              {data?.personalInformation.role}
            </p>
          </div>

          <p className="text-gray-700 text-sm font-medium text-justify ">
            {data?.personalInformation.summary}
          </p>

          <hr className="jmy-1" />
          <ContactInfo contacts={contactInfo} />
          <hr className="my-1" />

          <div className="flex flex-wrap">
            <EducationAndExperience
              experience={data.experience}
              education={data.education}
            />

            <SkillsAndProjects skills={data?.skills} projects={data.projects} />
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => {
              // Manually set a custom page height before generating PDF
              targetRef.current.style.height = "1600px"; // Set the desired height
              toPDF();
              targetRef.current.style.height = ""; // Reset to original height
            }}
            className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-700 hover:scale-110 font-mono font-bold tracking-wider capiitalize "
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
