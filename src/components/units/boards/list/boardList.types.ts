import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickWriteBoard: () => void;
  onClickListTitle: (event: MouseEvent<HTMLDivElement>) => void;
  startPage: number;
  onClickToNext: () => void;
  onClickToPre: () => void;
  onClickPageNumber: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
}
