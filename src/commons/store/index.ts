import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isSignUpState = atom({
  key: "isSignUpState",
  default: true,
});
