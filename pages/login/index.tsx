// import LoginPage01 from "../../src/components/commons/login/01/login01.container";

import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isSignUpState } from "../../src/commons/store";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 30px;
`;
export const MyInput = styled.input`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  border: 0.5px solid gray;
  border-radius: 5px;
  padding-left: 20px;
`;
export const MyLogInButton = styled.button`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  background-color: #537fe7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
export const MySignUpButton = styled.button`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: gray;
  border-radius: 5px;
  border: 0.5px solid gray;
  background-color: white;
  cursor: pointer;
`;
export const Dash = styled.div`
  width: 500px;
  height: 20px;
  border-top: 2px solid lightgray;
`;

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<IFormData>();
  const [isSignUp, setSignUp] = useRecoilState(isSignUpState);

  const onClickLogIn = (data: IFormData) => {
    console.log(data);
    console.log("로그인");
  };
  const onClickSignUp = (data: IFormData) => {
    console.log(data);
    console.log("회원가입");
  };
  const onClickGoToSignUp = () => {
    setSignUp(true);
  };
  return (
    <form onSubmit={handleSubmit(isSignUp ? onClickSignUp : onClickLogIn)}>
      <Wrapper>
        <Title>CODE.CAMP</Title>
        {isSignUp && (
          <MyInput
            type="text"
            placeholder="이름을 입력하세요."
            {...register("name")}
          />
        )}
        <MyInput
          type="text"
          placeholder="이메일을 입력하세요."
          {...register("email")}
        />
        <MyInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          {...register("password")}
        />
        <MyLogInButton>{isSignUp ? "회원가입" : "로그인"}</MyLogInButton>
        {!isSignUp && (
          <>
            <Dash></Dash>
            <MySignUpButton type="button" onClick={onClickGoToSignUp}>
              회원가입
            </MySignUpButton>
          </>
        )}
      </Wrapper>
      {/* <LoginPage01 /> */}
    </form>
  );
}
