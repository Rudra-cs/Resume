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
    "Docker",
    "Redis",
    "Kubernetes",
    "Android",
    "Java",
    "Kotlin",
    "SQL",
    "MongoDB",
  ],
  experience: [
    {
      title: "Software Development Intern",
      company: "Inofinity RND Pvt Ltd.",
      description: [
        "Developed many android apps and integrated with Arduino(Hardware)",
        "Worked on the frontend and backend of the app along with many API implementation using Retrofit library",
      ],
      dateJoining: "09/2021",
      dateLeaving: "07/2022",
      location: "Bhubaneswar,OD",
    },
    {
      title: "Web Developer",
      company: "SOUL Foundation",
      description: [
        "Worked on the complete revamp of the website",
        " Developed different sections of the website along with the team members",
      ],
      dateJoining: "05/2021",
      dateLeaving: "02/2022",
      location: "Bhubaneswar,OD",
    },
    {
      title: "Freelance Android Developer",
      company: "NIARA HOTEL",
      description: [
        "Developed a Native Android App(Java) forthe sole purpose of the distribution of food items.",
        "Worked on different API’s implement to make the app faster and smoother to enhance the ux experience.",
        "Worked on Room Database for database implementation, Retrofit for making API calls and Material UI forthe overall UI/UX of the app",
      ],
      dateJoining: "05/2021",
      dateLeaving: "08/2021",
      location: "Bhubaneswar,OD",
    },
  ],
  projects: [
    {
      title: "CONTACT MANAGER",
      link: "https://www.github.com/Rudra-cs/contact-manager",
      description: [
        "Developed an web app which stores user’s contact details of other people stored in the database(mongodb).",
        "Worked on Node.js as it’s backend server and Angular.js as it’s frontend along  with MongoDb as it’s Database which is hosted in the cloud server.",
      ],
      skills: "MongoDB, Angular, JavaScript, Node.js, Express.js",
    },
    {
      title: "SHEETS",
      link: "https://www.github.com/Rudra-cs/sheets",
      description: [
        " Implemented a robust two-way binding mechanism for seamless data synchronization between the UI and storage (Cell Properties).",
        " Developed efficient storage manipulation features, including cycle validation, colortracking and support for multiple sheets.",
      ],
      skills: "HTML/CSS, JavaScript",
    },
    {
      title: "ALERT NEWS",
      link: "https://www.github.com/Rudra-cs/alert-news",
      description: [
        " Developed an Android App which fetch news from which news websites through an API and populate the app with the news",
        "Worked on Room DB to store the liked news to be read afterwards, also used Coroutines for Asynchronous work",
        "The app is based on MVVM Architecture, also many otherlibraries are used like Glide etc.",
      ],
      skills: "Android, Kotlin, MVVM, RoomDB, Glide",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engg.",
      institution: "SILICON INSTITUTE OF TECHNOLOGY",
      joiningDate: "2019",
      graduationDate: "2023",
    },
    {
      degree: "Intermediate/HSC (+2 Science)",
      institution: "B.J.B. JUNIOR COLLEGE",
      joiningDate: "2015",
      graduationDate: "2017",
    },
    {
      degree: "Matriculation",
      institution: "Venkateswar English Medium School",
      joiningDate: "2003",
      graduationDate: "2015",
    },
  ],
  personalInformation: {
    name: "Rudra Prasad Behera",
    role: "Software Engineer",
    summary:
      "I'm a Software Developer with a passion for creating exceptional applications that not only work seamlessly but also offer an outstanding user experience. I believe development is more than just coding; it's about crafting intuitive interfaces, designing smooth interactions, and ensuring every aspect aligns with user needs and expectations.",
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
