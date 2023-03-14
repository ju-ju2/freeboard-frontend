import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";

export default function BoardList() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  console.log(data?.fetchBoards);
  const router = useRouter();

  const onClickWriteBoard = () => {
    void router.push("./boards/new");
  };

  const onClickListTitle = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        count={dataBoardsCount?.fetchBoardsCount}
        onClickWriteBoard={onClickWriteBoard}
        onClickListTitle={onClickListTitle}
        refetch={refetch}
      />
    </>
  );
}
