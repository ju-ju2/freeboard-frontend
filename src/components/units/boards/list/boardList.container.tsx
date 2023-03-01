import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS } from "./boardList.queries";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  console.log(data?.fetchBoards);
  const router = useRouter();

  //   for (let i = 1; i <= 10; i++) {
  //     const num = (i = i + 1);
  //     return num;
  //   }

  const onClickWriteBoard = () => {
    router.push("./boards/new");
  };

  const onClickListTitle = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`./boards/${event.currentTarget.id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickWriteBoard={onClickWriteBoard}
        onClickListTitle={onClickListTitle}
      />
    </>
  );
}
