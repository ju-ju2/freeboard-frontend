import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isLoggedInState,
  isSignUpState,
} from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";

import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { useEffect } from "react";

export default function LayoutHeader() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [isSignUp, setIsSignUp] = useRecoilState(isSignUpState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };
  const onClickLogin = () => {
    void router.push("/login");
    setIsSignUp(false);
  };
  const onClickSignin = () => {
    void router.push("/login");
    setIsSignUp(true);
  };
  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  };
  useEffect(() => {
    console.log("재실행되는지 확인");
  }, [accessToken]);

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignin={onClickSignin}
      onClickLogOut={onClickLogOut}
      data={data}
    />
  );
}
