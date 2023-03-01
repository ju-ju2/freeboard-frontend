import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import FreeBoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

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

  return (
    <FreeBoardDetailUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToBoards={onClickMoveToBoards}
    />
  );
}
