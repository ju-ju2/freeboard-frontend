import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import CommentWriteUI from "./commentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import {
  ICommentWriteProps,
  IUpdateBoardCommentInput,
} from "./commentWrite.types";

export const FETCH_BOARD_COMMENTS = gql`
  query typeSetting($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  // const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickUploadComment = async () => {
    if (!writer) {
      alert("작성자를 입력하지 않았습니다");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다");
      return;
    }
    if (!contents) {
      alert("내용이 입력되지 않았습니다");
      return;
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }

    setWriter("");
    setPassword("");
    setContents("");
    setRating(0);
  };

  const onClickUpdateComment = async () => {
    if (!contents) {
      alert("수정된 내용이 없습니다");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickUploadComment={onClickUploadComment}
      onClickUpdateComment={onClickUpdateComment}
      writer={writer}
      contents={contents}
      password={password}
      setRating={setRating}
      rating={rating}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
