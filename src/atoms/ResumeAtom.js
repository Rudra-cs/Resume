// atoms.js
import { atom } from "recoil";

const defaultData = {
  skills: [
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
  ],
  experience: [
    {
      title: "Web Developer",
      company: "ABC Company",
      description: [
        "Developed and maintained for my company website,",
        "Implemented responsive design with optimizing performance.",
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
  ],
  projects: [
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
  ],
  education: [
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
  ],
  personalInformation: {
    name: "Rudra Prasad Behera",
    role: "Software Engineer",
    summary:
      "Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.",
    email: "rudra.behera50@gmail.com",
    phoneNo: "0123 2020 9876",
    location: "Bhubaneswar, OD",
    linkedIn: "https://www.linkedin.com/in/rudrabehera",
  },
};

const localStorageData =
  JSON.parse(localStorage.getItem("data")) || defaultData;

export const dataState = atom({
  key: "dataState",
  default: localStorageData,
});

// export const skillsSelector = selector({
//   key: "skillsSelector",
//   get: ({ get }) => {
//     const data = get(dataState);
//     return data.skills;
//   },
//   set: ({ set, get }, newValue) => {
//     const data = get(dataState) || {};
//     const newData = { ...data, skills: newValue };
//     set(dataState, newData);
//     localStorage.setItem("data", JSON.stringify(newData));
//   },
// });

// export const experienceSelector = selector({
//   key: "experienceSelector",
//   get: ({ get }) => {
//     const data = get(dataState);
//     return data.experience;
//   },
//   set: ({ set, get }, newValue) => {
//     const data = get(dataState);
//     const newData = { ...data, experience: newValue };
//     set(dataState, newData);
//     localStorage.setItem("data", JSON.stringify(newData));
//   },
// });

// export const projectsSelector = selector({
//   key: "projectsSelector",
//   get: ({ get }) => {
//     const data = get(dataState);
//     return data.projects;
//   },
//   set: ({ set, get }, newValue) => {
//     const data = get(dataState);
//     const newData = { ...data, projects: newValue };
//     set(dataState, newData);
//     localStorage.setItem("data", JSON.stringify(newData));
//   },
// });

// export const educationSelector = selector({
//   key: "educationSelector",
//   get: ({ get }) => {
//     const data = get(dataState);
//     return data.education;
//   },
//   set: ({ set, get }, newValue) => {
//     const data = get(dataState);
//     const newData = { ...data, education: newValue };
//     set(dataState, newData);
//     localStorage.setItem("data", JSON.stringify(newData));
//   },
// });

// export const personalInformationSelector = selector({
//   key: "personalInformationSelector",
//   get: ({ get }) => {
//     const data = get(dataState);
//     return data.personalInformation;
//   },
//   set: ({ set, get }, newValue) => {
//     const data = get(dataState);
//     const newData = { ...data, personalInformation: newValue };
//     set(dataState, newData);
//     localStorage.setItem("data", JSON.stringify(newData));
//   },
// });
