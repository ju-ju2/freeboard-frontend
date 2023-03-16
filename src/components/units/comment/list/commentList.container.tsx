import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentListUI from "./commentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";

export default function CommentList() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const [myBoardId, setMyBoardId] = useState("");

  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickOpenDeleteModal = async (
    event: MouseEvent<HTMLImageElement>
  ) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMyBoardId(event.target.id);
    setIsDeleteModalOpen((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardId,
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
    setIsDeleteModalOpen((prev) => !prev);
  };

  // const onClickComment = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  //   // event.currentTarget = 버블링 이벤트로 인해 어디를 클릭해도 onClick이 실행된 id를 선택한다.
  // };

  const onClickModify = () => {};
  return (
    <CommentListUI
      data={data}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      // onClickComment={onClickComment}
      isDeleteModalOpen={isDeleteModalOpen}
      onChangePassword={onChangePassword}
      onClickDelete={onClickDelete}
      onClickModify={onClickModify}
    />
  );
}
