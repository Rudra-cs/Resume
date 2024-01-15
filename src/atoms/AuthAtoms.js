import { atom } from "recoil";

const token = localStorage.getItem("token") != null ? true : false;

export const authState = atom({
  key: "authState",
  default: token,
});
