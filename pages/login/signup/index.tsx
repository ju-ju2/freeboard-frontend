import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  margin-bottom: 10px;
`;
export const MyInput = styled.input`
  width: 500px;
  height: 50px;
  border: 0.5px solid gray;
  border-radius: 5px;
  padding-left: 20px;
`;
export const MyLogInButton = styled.button`
  width: 500px;
  height: 50px;
  margin-top: 20px;
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
  margin-top: 20px;
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
export const PasswordRule = styled.div`
  width: 500px;
  padding-left: 20px;
  font-size: 12px;
  color: gray;
`;

interface IFormData {
  name: string;
  email: string;
  password: string;
}
const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("올바른 이메일 형식을 사용해주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      "비밀번호 형식을 확인해주세요"
    ),
});

export default function SignUpPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = (data: IFormData) => {
    console.log(data);
    console.log("회원가입");
  };

  return (
    <form onSubmit={handleSubmit(onClickSignUp)}>
      <Wrapper>
        <Title>CODE.CAMP</Title>
        <InputWrapper>
          <MyInput
            type="text"
            placeholder="이름을 입력하세요."
            {...register("name")}
          />
          <LoginError>{formState.errors.name?.message}</LoginError>
        </InputWrapper>
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
          <PasswordRule>
            * 비밀번호는 최소 8자, 하나의 문자, 하나의 숫자 및 하나의 특수문자로
            구성되어야 합니다.
          </PasswordRule>
        </InputWrapper>
        <MyLogInButton>회원가입</MyLogInButton>
      </Wrapper>
      {/* <LoginPage01 /> */}
    </form>
  );
}
