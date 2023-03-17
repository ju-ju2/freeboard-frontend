import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { GetDateHour } from "../../../../commons/utils/utils";
import { firebaseApp } from "../../../../../pages/firebaseBoards";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 20px;
  margin-right: 20px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 100px;
`;
export const MyButton = styled(Button)`
  margin-bottom: 50px;
`;

export default function FirebaseBoardWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onClickUpload = async () => {
    const firebaseBoard = collection(
      getFirestore(firebaseApp),
      "FirebaseBoard"
    );
    void addDoc(firebaseBoard, {
      writer,
      title,
      contents,
      timeStamp: String(GetDateHour(new Date())),
    });
    alert("게시글 등록이 완료되었습니다");
    await router.push("../firebaseBoards");
  };

  return (
    <Wrapper>
      <Title>게시물 작성 🚀</Title>
      <InputWrapper>
        <InputRow>
          <Text>작성자 : </Text>
          <Input
            onChange={onChangeWriter}
            size="large"
            placeholder="작성자를 입력해주세요"
            prefix={<UserOutlined />}
          />
        </InputRow>
        <InputRow>
          <Text> 제목 : </Text>
          <Input
            onChange={onChangeTitle}
            size="large"
            placeholder="제목을 입력해주세요"
          />
        </InputRow>
        <InputRow>
          <Text> 내용 : </Text>
          <Input
            onChange={onChangeContents}
            size="large"
            placeholder="내용을 입력해주세요"
          />
        </InputRow>
      </InputWrapper>
      <MyButton onClick={onClickUpload} type="primary">
        게시물 등록
      </MyButton>
    </Wrapper>
  );
}
