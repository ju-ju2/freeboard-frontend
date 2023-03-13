import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Address } from "react-daum-postcode";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import FreeBoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IFreeBoardWriteProps } from "./BoardWrite.types";

// 1. 함수 위에서 mutation 가져오기 (대소문자 상관없다)
// 2. 타입 설정해주기

export default function FreeBoardWrite(props: IFreeBoardWriteProps) {
  console.log(props.data?.fetchBoard);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setContentsTitle] = useState("");
  const [contents, setContents] = useState("");

  // 에러메시지 변수담기
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    setAddressOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAddressOpen(false);
  };

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // if (!event.target.value) {
    //   setIsActive(false);
    // }
    // 아래 else문으로 대체
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setContentsTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  // 3. useMutation 사용해서 함수 선언하기, 1,2번을 등록하는 로직
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // 4. async와 await를 사용해서 동기적 함수 만들기, 3번을 실행하는 로직
  const onClickUpload = async () => {
    if (!writer) {
      setWriterError("*이름을 입력해주세요");
    }
    if (!password) {
      setPasswordError("*비밀번호를 입력해주세요");
    }
    if (!title) {
      setTitleError("*제목을 입력해주세요");
    }
    if (!contents) {
      setContentsError("*내용을 입력해주세요");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              // key와 value가 같으면 value를 생략할 수 있다, shorthand-property  ex) writer, password, ~~
            },
          },
        });
        console.log(result);
        alert(
          props.isEdit
            ? "게시글 수정이 완료되었습니다"
            : "게시글 등록이 완료되었습니다"
        );

        if (typeof result.data?.createBoard._id !== "string") {
          alert("서버에 문제가 있습니다.");
          return;
        }
        console.log(result.data?.createBoard._id);
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    }
  };

  const [isPasswordProblem, setIsPasswordProblem] = useState(false);

  const onClickEdit = async () => {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      setIsModalOpen(true);
      // alert("수정한 내용이 없습니다");
      return;
    }
    if (!password) {
      setIsModalOpen(true);
      setIsPasswordProblem(true);
      // alert("비밀번호를 입력해주세요");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    // 수정된 내용이 있을때만 추가해서 뮤테이션 날려주기

    try {
      const result = await updateBoard({
        // variables: {
        //   updateBoardInput: {
        //     title: contentsTitle,
        //     contents,
        //   },
        //   password,
        //   boardId: router.query.boardId,
        // },
        variables: {
          updateBoardInput,
          password,
          boardId: String(router.query.boardId),
        },
      });
      console.log(result);
      alert(
        props.isEdit
          ? "게시글 수정이 완료되었습니다"
          : "게시글 등록이 완료되었습니다"
      );

      if (typeof result.data?.updateBoard._id !== "string") {
        alert("서버에 문제가 있습니다.");
        return;
      }
      console.log(result.data?.updateBoard._id);
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const [addressOpen, setAddressOpen] = useState(false);
  const onClickAddress = () => {
    setAddressOpen(true);
  };

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const handleComplete = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    setAddressOpen(false);
  };

  const onClickAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  return (
    <FreeBoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickUpload={onClickUpload}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isModalOpen={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isPasswordProblem={isPasswordProblem}
      handleComplete={handleComplete}
      onClickAddress={onClickAddress}
      addressOpen={addressOpen}
      address={address}
      zipcode={zipcode}
      onClickAddressDetail={onClickAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
    />
  );
}
