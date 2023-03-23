import { useRecoilState } from "recoil";
import { accessTokenState, isLoggedInState } from "../../../../commons/store";
import { Login, Logo, SignIn, User, Wrapper } from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./layoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  return (
    <Wrapper>
      <Logo onClick={props.onClickLogo}>code.camp</Logo>

      {accessToken ? (
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
