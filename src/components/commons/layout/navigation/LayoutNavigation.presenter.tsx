import { Fragment } from "react";
import { MainText, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENU = [
  { name: "자유게시판", page: "/boards" },
  { name: "상품목록", page: "/boards/new" },
  { name: "마이페이지", page: "/boards" },
];

export default function LayoutHeaderUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      {NAVIGATION_MENU.map((el) => (
        <Fragment key={el.page}>
          <MainText id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MainText>
        </Fragment>
      ))}
    </Wrapper>
  );
}
