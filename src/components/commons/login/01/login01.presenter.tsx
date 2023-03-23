import { ChangeEvent } from "react";
import { MyButton, MyInput, Title, Wrapper, Dash } from "./login01.styles";

interface ILoginPage01UIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: () => void;
  onClickSignUp: () => void;
}

export default function LoginPage01UI(props: ILoginPage01UIProps) {
  return (
    <>
      <Wrapper>
        <Title>CODE.CAMP</Title>
        <MyInput
          onChange={props.onChangeEmail}
          type="text"
          placeholder="이메일을 입력하세요."
        />
        <MyInput
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <MyButton type="primary" onClick={props.onClickLogIn}>
          로그인
        </MyButton>
        <Dash></Dash>
        <MyButton onClick={props.onClickSignUp}>회원가입</MyButton>
      </Wrapper>
    </>
  );
}
