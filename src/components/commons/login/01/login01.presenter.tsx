import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { isSignUpState } from "../../../../commons/store";
import { MyButton, MyInput, Title, Wrapper, Dash } from "./login01.styles";

interface ILoginPage01UIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: () => void;
  onClickSignUp: () => void;
  onClickGoToSignUp: () => void;
}

export default function LoginPage01UI(props: ILoginPage01UIProps) {
  const [isSignUp, setSignUp] = useRecoilState(isSignUpState);

  return (
    <>
      <Wrapper>
        <Title>CODE.CAMP</Title>
        {isSignUp && (
          <MyInput
            onChange={props.onChangeName}
            type="text"
            placeholder="이름을 입력하세요."
          />
        )}
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
        <MyButton
          type="primary"
          onClick={isSignUp ? props.onClickSignUp : props.onClickLogIn}
        >
          {isSignUp ? "회원가입" : "로그인"}
        </MyButton>
        {!isSignUp && (
          <>
            <Dash></Dash>
            <MyButton onClick={props.onClickGoToSignUp}>회원가입</MyButton>
          </>
        )}
      </Wrapper>
    </>
  );
}
