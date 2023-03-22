import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface ISearchBar01UIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBar01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeKeyword: (value: string) => void;
  dataBoardsRefetch: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
