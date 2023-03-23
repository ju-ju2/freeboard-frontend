import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isSignUpState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import LoginPage01UI from "./login01.presenter";
import {
  CREATE_USER,
  FETCH_USER_LOGGED_IN,
  LOGIN_USER,
} from "./login01.queries";

export default function LoginPage01() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isSignUp, setIsSignUp] = useRecoilState(isSignUpState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
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
        Modal.warning({ content: "로그인 정보가 없습니다. 다시 시도해주세요" });
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
  const onClickSignUp = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      const userName = result.data?.createUser.name;
      if (!userName) {
        Modal.error({ content: "가입 실패" });
        return;
      }
      Modal.info({ content: `${userName}님 가입에 성공하셨습니다!.` });
      void router.push("./");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickGoToSignUp = () => {
    setIsSignUp(true);
  };
  return (
    <LoginPage01UI
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogIn={onClickLogIn}
      onClickSignUp={onClickSignUp}
      onClickGoToSignUp={onClickGoToSignUp}
    />
  );
}
