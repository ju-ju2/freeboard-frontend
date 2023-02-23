import {
  Address__wrapper,
  Headline,
  MainFormat,
  YoutubeLink,
  AddressNum,
  Contents,
  AddressNum__search,
  Label,
  Picture__wrapper,
  RadioButton,
  Upload__button,
  Upload__picture,
  UserWrapper,
  Wrapper,
  Password,
  Writer,
  ContentsTitle,
  Address__input,
  RadioLabel,
  Radio__wrapper,
  ErrorMessage,
} from "@/styles/emotion";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

//1. 함수 위에서 mutation 가져오기 (대소문자 상관없다)
//2. 타입 설정해주기
const CREATE_BOARD = gql`
  mutation typeSetting($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function UploadPage() {
  // 여기는 자바스크립트

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contentsTitle, setContentsTitle] = useState("");
  const [contents, setContents] = useState("");

  // 에러메시지 변수담기
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsTitleError, setContentsTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function onChangeContentsTitle(event) {
    setContentsTitle(event.target.value);
    if (event.target.value !== "") {
      setContentsTitleError("");
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  }

  //3. useMutation 사용해서 함수 선언하기
  const [newJeans] = useMutation(CREATE_BOARD);

  //4. async와 await를 사용해서 동기적 함수 만들기
  const onClickUpload = async () => {
    if (!writer) {
      setWriterError("*이름을 입력해주세요");
    }
    if (!password) {
      setPasswordError("*비밀번호를 입력해주세요");
    }
    if (!contentsTitle) {
      setContentsTitleError("*제목을 입력해주세요");
    }
    if (!contents) {
      setContentsError("*내용을 입력해주세요");
    }
    if (writer && password && contentsTitle && contents) {
      const result = await newJeans({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: contentsTitle,
            contents: contents,
          },
        },
      });
      console.log(result);
      alert("게시글 등록이 완료되었습니다");
    }
  };

  return (
    // 여기는 html
    <Wrapper>
      <Headline>게시글 등록</Headline>
      <UserWrapper>
        <MainFormat>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeWriter}
          ></Writer>
          <ErrorMessage>{writerError}</ErrorMessage>
        </MainFormat>
        <MainFormat>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 적어주세요"
            onChange={onChangePassword}
          ></Password>
          <ErrorMessage>{passwordError}</ErrorMessage>
        </MainFormat>
      </UserWrapper>

      <MainFormat>
        <Label>제목</Label>
        <ContentsTitle
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={onChangeContentsTitle}
        ></ContentsTitle>
        <ErrorMessage>{contentsTitleError}</ErrorMessage>
      </MainFormat>
      <MainFormat>
        <Label>내용</Label>
        <Contents
          type="text"
          placeholder="내용을 작성해주세요"
          onChange={onChangeContents}
        ></Contents>
        <ErrorMessage>{contentsError}</ErrorMessage>
      </MainFormat>
      <MainFormat>
        <Label>주소</Label>
        <Address__wrapper>
          <AddressNum type="text" placeholder="07250"></AddressNum>
          <AddressNum__search>우편번호검색</AddressNum__search>
        </Address__wrapper>
        <Address__input></Address__input>
        <Address__input></Address__input>
        <ErrorMessage></ErrorMessage>
      </MainFormat>
      <MainFormat>
        <Label>유튜브</Label>
        <YoutubeLink
          type="text"
          placeholder="링크를 복사해주세요"
        ></YoutubeLink>
        <ErrorMessage></ErrorMessage>
      </MainFormat>
      <MainFormat>
        <Label>사진첨부</Label>
        <Picture__wrapper>
          <Upload__picture>+</Upload__picture>
          <Upload__picture>+</Upload__picture>
          <Upload__picture>+</Upload__picture>
        </Picture__wrapper>
      </MainFormat>
      <MainFormat>
        <Label>메인 설정</Label>
        <Radio__wrapper>
          <RadioButton
            type="radio"
            id="youtube"
            name="radio-button"
            value="유튜브"
          ></RadioButton>
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton
            type="radio"
            id="image"
            name="radio-button"
            value="사진"
          ></RadioButton>
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </Radio__wrapper>
      </MainFormat>
      <Upload__button onClick={onClickUpload}>등록하기</Upload__button>
    </Wrapper>
  );
}
