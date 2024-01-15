import { atom } from "recoil";

// Define the atom for the skills state
export const skillsState = atom({
  key: "skillsState",
  default: [], // Initial default value (empty array in this case)
});

export const personalInformationState = atom({
  key: "personalInformationState",
  default: {
    name: "Rudra Prasad Behera",
    role: "Software Engineer",
    summary: "Experienced web developer...",
    contactInfo: [
      { icon: null, label: "john.doe@example.com" },
      { icon: null, label: "0123 2020 9876" },
      { icon: null, label: "Bhubaneswar, OD" },
      {
        icon: null,
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/johndoe",
      },
    ],
  },
});
