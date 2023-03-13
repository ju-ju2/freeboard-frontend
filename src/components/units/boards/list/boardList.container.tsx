import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
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

  //   for (let i = 1; i <= 10; i++) {
  //     const num = (i = i + 1);
  //     return num;
  //   }

  const onClickWriteBoard = () => {
    void router.push("./boards/new");
  };

  const onClickListTitle = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };

  const [startPage, setStartPage] = useState(1);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  const onClickToPre = () => {
    if (startPage !== 1) {
      void refetch({ page: startPage - 10 });
      setStartPage(startPage - 10);
    }
  };

  const onClickToNext = () => {
    if (startPage + 10 <= lastPage) {
      void refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
    }
  };

  const onClickPageNumber = (event: MouseEvent<HTMLDivElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickWriteBoard={onClickWriteBoard}
        onClickListTitle={onClickListTitle}
        startPage={startPage}
        onClickToNext={onClickToNext}
        onClickPageNumber={onClickPageNumber}
        onClickToPre={onClickToPre}
        lastPage={lastPage}
      />
    </>
  );
}
