import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    accessToken: "",
    isLogin: false,
    createdAt: "",
    description: "",
    id: 0,
    img: "",
    loginType: "",
    nickname: "",
    social_id: "",
    updatedAt: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const drawerState = atom({
  key: "drawerState",
  default: false,
});

export const loginModalState = atom({
  key: "loginModalState",
  default: false,
});
