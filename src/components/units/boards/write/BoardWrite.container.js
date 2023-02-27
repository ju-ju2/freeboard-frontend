import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FreeBoardWriteUI from "./BoardWriter.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWriter.queries";

//1. 함수 위에서 mutation 가져오기 (대소문자 상관없다)
//2. 타입 설정해주기

export default function FreeBoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contentsTitle, setContentsTitle] = useState("");
  const [contents, setContents] = useState("");

  // 에러메시지 변수담기
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsTitleError, setContentsTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // if (!event.target.value) {
    //   setIsActive(false);
    // }
    //아래 else문으로 대체
    if (event.target.value && password && contentsTitle && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && contentsTitle && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContentsTitle(event) {
    setContentsTitle(event.target.value);
    if (event.target.value !== "") {
      setContentsTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && contentsTitle && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  //3. useMutation 사용해서 함수 선언하기, 1,2번을 등록하는 로직
  const [newJeans] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  //4. async와 await를 사용해서 동기적 함수 만들기, 3번을 실행하는 로직
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
      try {
        const result = await newJeans({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: contentsTitle,
              contents: contents,
              //key와 value가 같으면 value를 생략할 수 있다, shorthand-property  ex) writer, password, ~~
            },
          },
        });
        console.log(result);
        alert(
          props.isEdit
            ? "게시글 수정이 완료되었습니다"
            : "게시글 등록이 완료되었습니다"
        );
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: contentsTitle,
            contents,
          },
          password,
          boardId: router.query.boardId,
        },
      });
      console.log(result);
      alert(
        props.isEdit
          ? "게시글 수정이 완료되었습니다"
          : "게시글 등록이 완료되었습니다"
      );
      console.log(result.data.updateBoard._id);
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <FreeBoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContentsTitle={onChangeContentsTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      contentsTitleError={contentsTitleError}
      contentsError={contentsError}
      onClickUpload={onClickUpload}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
