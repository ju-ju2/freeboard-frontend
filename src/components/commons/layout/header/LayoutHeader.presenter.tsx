import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../../../commons/store";
import { Login, Logo, SignIn, User, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./layoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  return (
    <Wrapper>
      <Logo onClick={props.onClickLogo}>code.camp</Logo>
      {/* {!isLoggedIn && (
        <>
          <Login onClick={props.onClickLogin}>로그인</Login>
          <SignIn onClick={props.onClickSignin}>회원가입</SignIn>
        </>
      )} */}
      {isLoggedIn ? (
        <>
          <User>{props.data?.fetchUserLoggedIn.name}님</User>
          <SignIn onClick={props.onClickLogOut}>로그아웃</SignIn>
        </>
      ) : (
        <>
          <Login onClick={props.onClickLogin}>로그인</Login>
          <SignIn onClick={props.onClickSignin}>회원가입</SignIn>
        </>
      )}
    </Wrapper>
  );
}
