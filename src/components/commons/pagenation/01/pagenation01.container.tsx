import { MouseEvent, useState } from "react";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import PageNation01UI from "./pagenation01.presenter";

interface IPageNation01Props {
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function PageNation01(props: IPageNation01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  // 활성화된 페이지 넘버에 색을 주기 위해서 activePage추가
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickToPre = () => {
    if (startPage !== 1) {
      void props.refetch({ page: startPage - 10 });
      setStartPage(startPage - 10);
      setActivedPage(activedPage - 10);
    }
  };

  const onClickToNext = () => {
    if (startPage + 10 <= lastPage) {
      void props.refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
      setActivedPage(activedPage + 10);
    }
  };

  const onClickPageNumber = (event: MouseEvent<HTMLDivElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setActivedPage(Number(event.currentTarget.id));
  };

  return (
    <PageNation01UI
      startPage={startPage}
      lastPage={lastPage}
      onClickToPre={onClickToPre}
      onClickToNext={onClickToNext}
      onClickPageNumber={onClickPageNumber}
      activedPage={activedPage}
    />
  );
}
