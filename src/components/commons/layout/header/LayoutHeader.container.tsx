import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };
  const onClickLogin = () => {
    void router.push("/boards");
  };
  const onClickSignin = () => {
    void router.push("/boards");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignin={onClickSignin}
    />
  );
}
