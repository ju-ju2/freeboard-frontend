import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  // onClickComment: (event: MouseEvent<HTMLDivElement>) => void;
  isDeleteModalOpen: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: any;
  onClickModify: any;
}
