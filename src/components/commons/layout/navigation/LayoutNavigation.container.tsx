import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutHeaderUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.target.id);
    console.log(event.target.id);
  };
  return <LayoutHeaderUI onClickMenu={onClickMenu} />;
}
