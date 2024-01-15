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

const Resume = () => {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Redux",
    "Recoil",
    "Vue,js",
    "Firebase",
    "AWS",
    "Cloud Computing",
    "Docker",
    "Redis",
    "Kubernetes",
    "Android",
    "Java",
    "Kotlin",
  ];

  const experience = [
    {
      title: "Web Developer",
      company: "ABC Company",
      description: [
        "Developed and maintained for my company website,",
        "Implemented responsive design with the optimizing performance.",
        "Collaborated with the design team to create visually appealing web pages.",
      ],
      dateJoining: "01/2020",
      dateLeaving: "Present",
      location: "Bhubaneswar,OD",
    },
    {
      title: "Frontend Developer",
      company: "XYZ Agency",
      description: [
        "Worked on various client projects,",
        "translating design mockups into interactive web pages.",
        "Utilized modern web technologies to ensure cross-browser compatibility.",
      ],
      dateJoining: "06/2019",
      dateLeaving: "11/2019",
      location: "Remote",
    },

    {
      title: "Frontend Developer",
      company: "XYZ Agency",
      description: [
        "Worked on various client projects,",
        "translating design mockups into interactive web pages.",
        "Utilized modern web technologies to ensure cross-browser compatibility.",
      ],
      dateJoining: "06/2019",
      dateLeaving: "11/2019",
      location: "Remote",
    },
  ];

  const projects = [
    {
      title: "E-commerce Website",
      link: "http://www.github.com/Rudra-cs/",
      description: [
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
      ],
      skills: "React, JavaScript, Responsive Design",
      date: "2022",
    },
    {
      title: "Portfolio Website",
      link: "john.doe@example.com",
      description: [
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
      ],
      skills: "HTML/CSS, JavaScript, React",
      date: "2021",
    },
    {
      title: "Portfolio Website",
      link: "john.doe@example.com",
      description: [
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
        "Built a responsive e-commerce website using React",
        "and integrated payment processing.",
      ],
      skills: "HTML/CSS, JavaScript, React",
      date: "2021",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      joiningDate: "2017",
      graduationDate: "2018",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      joiningDate: "2017",
      graduationDate: "2018",
    },
  ];

  const personalInformation = {
    name: "Rudra Prasad Behera",
    role: "Software Engineer",
    summary:
      "Experienced web developer with a passion for creating responsive anduser-friendly websites. Proficient in HTML, CSS, JavaScript, andvarious web development frameworks.",
    email: "rudra.behera50@gmail.com",
    phoneNo: "0123 2020 9876",
    location: "Bhubaneswar, OD",
    linkedIn: "https://www.linkedin.com/in/rudrabehera",
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: `${personalInformation.email}` },
    { icon: <FaPhone />, label: `${personalInformation.phoneNo}` },
    {
      icon: <FaMapMarkerAlt />,
      label: `${personalInformation.location}`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/johndoe",
    },
  ];

  return (
    <div className="bg-gray-100 font-sans min-h-screen  ">
      <div className="container mx-auto py-8 px-4  max-w-screen-md ">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-300">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold ">
              {personalInformation.name}
            </h1>
            <p className="text-gray-600 text-base font-normal font-poppins">
              {personalInformation.role}
            </p>
          </div>

          <p className="text-gray-700 text-sm font-medium text-justify ">
            {personalInformation.summary}
          </p>

          <hr className="jmy-1" />
          <ContactInfo contacts={contactInfo} />
          <hr className="my-1" />

          <div className="flex flex-wrap">
            <EducationAndExperience
              experience={experience}
              education={education}
            />

            <SkillsAndProjects skills={skills} projects={projects} />
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-700 hover:scale-110 font-mono font-bold tracking-wider capiitalize ">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
