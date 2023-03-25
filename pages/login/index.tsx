// import LoginPage01 from "../../src/components/commons/login/01/login01.container";

import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isSignUpState } from "../../src/commons/store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

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
export const InputWrapper = styled.div`
  width: 500px;
  margin-bottom: 20px;
`;
export const MyInput = styled.input`
  width: 500px;
  height: 50px;
  border: 0.5px solid gray;
  border-radius: 5px;
  padding-left: 10px;
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
export const LoginError = styled.div`
  width: 500px;
  padding: 10px 0 0 20px;
  font-size: 12px;
  color: red;
`;

interface IFormData {
  name: string;
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
});

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogIn = (data: IFormData) => {
    console.log(data);
    console.log("로그인");
  };

  const onClickGoToSignUp = () => {
    void router.push("/login/signup");
  };
  return (
    <form onSubmit={handleSubmit(onClickLogIn)}>
      <Wrapper>
        <Title>CODE.CAMP</Title>
        <InputWrapper>
          <MyInput
            type="text"
            placeholder="이메일을 입력하세요."
            {...register("email")}
          />
          <LoginError>{formState.errors.email?.message}</LoginError>
        </InputWrapper>
        <InputWrapper>
          <MyInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            {...register("password")}
          />
          <LoginError>{formState.errors.password?.message}</LoginError>
        </InputWrapper>
        <MyLogInButton>로그인</MyLogInButton>

        <Dash></Dash>
        <MySignUpButton type="button" onClick={onClickGoToSignUp}>
          회원가입
        </MySignUpButton>
      </Wrapper>
      {/* <LoginPage01 /> */}
    </form>
  );
}
