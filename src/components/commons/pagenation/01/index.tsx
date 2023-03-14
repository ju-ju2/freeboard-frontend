import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { MouseEvent, useState } from "react";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
export const PageNumber = styled.div`
  font-size: 16px;
  width: 40px;
  cursor: pointer;

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
export const ToNext = styled(RightOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: orange;
  }
`;
export const ToPre = styled(LeftOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: orange;
  }
`;

interface IPageNation01Props {
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function PageNation01(props: IPageNation01Props) {
  console.log(props.count);
  const [startPage, setStartPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickToPre = () => {
    if (startPage !== 1) {
      void props.refetch({ page: startPage - 10 });
      setStartPage(startPage - 10);
    }
  };

  const onClickToNext = () => {
    if (startPage + 10 <= lastPage) {
      void props.refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
    }
  };

  const onClickPageNumber = (event: MouseEvent<HTMLDivElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <>
      <PageNumberWrapper>
        <ToPre onClick={onClickToPre} />
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <PageNumber
                onClick={onClickPageNumber}
                key={index + startPage}
                id={String(index + startPage)}
              >
                {index + startPage}
              </PageNumber>
            )
        )}
        <ToNext onClick={onClickToNext} />
      </PageNumberWrapper>
    </>
  );
}
