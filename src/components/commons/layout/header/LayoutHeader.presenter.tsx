import { Login, Logo, SignIn, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./layoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <Wrapper>
      <Logo onClick={props.onClickLogo}>code.camp</Logo>
      <Login onClick={props.onClickLogin}>로그인</Login>
      <SignIn onClick={props.onClickSignin}>회원가입</SignIn>
    </Wrapper>
  );
}
