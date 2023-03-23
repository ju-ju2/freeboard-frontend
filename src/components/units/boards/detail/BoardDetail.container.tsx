import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import FreeBoardDetailUI from "./BoardDetail.presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";

export default function FreeBoardDetail() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.boardId);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
      // router.query.boardId의 boardId는 폴더명과 같다. [폴더명: 변수]
    }
  );
  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickMoveToBoards = () => {
    router.push("/boards");
  };
  const onClickDeleteBoard = () => {
    alert("추후 기능 생성 예정");
  };

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
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

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const onClickDislike = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
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

  return (
    <FreeBoardDetailUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
