import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
}
