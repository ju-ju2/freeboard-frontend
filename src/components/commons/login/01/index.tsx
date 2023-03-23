import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { MyButton, MyInput, Title, Wrapper, Dash } from "./login01.styles";

const LOGIN_USER = gql`
  mutation typeSetting($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage01() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result);
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.confirm({ content: "로그인 정보가 없습니다. 다시 시도해주세요" });
        return;
      }
      setAccessToken(accessToken);

      void router.push("./");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickSignUp = () => {
    void router.push("./");
  };
  return (
    <Wrapper>
      <Title>CODE.CAMP</Title>
      <MyInput
        onChange={onChangeEmail}
        type="text"
        placeholder="이메일을 입력하세요."
      />
      <MyInput
        onChange={onChangePassword}
        type="password"
        placeholder="비밀번호를 입력하세요."
      />
      <MyButton type="primary" onClick={onClickLogIn}>
        로그인
      </MyButton>
      <Dash></Dash>
      <MyButton onClick={onClickSignUp}>회원가입</MyButton>
    </Wrapper>
  );
}
