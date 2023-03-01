import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
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
  // const { data } = useQuery(FETCH_BOARDS);
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

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    const myPassword = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id,
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
  };

  const onClickComment = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
    //event.currentTarget = 버블링 이벤트로 인해 어디를 클릭해도 onClick이 실행된 id를 선택한다.
  };

  return (
    <CommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickComment={onClickComment}
    />
  );
}
