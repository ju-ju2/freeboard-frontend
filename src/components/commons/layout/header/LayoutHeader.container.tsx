import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isSignUpState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const [isSignUp, setIsSignUp] = useRecoilState(isSignUpState);
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

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignin={onClickSignin}
    />
  );
}
