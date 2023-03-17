import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUploadComment: () => void;
  onClickUpdateComment: () => void;
  writer: string;
  password: string;
  contents: string;
  setRating: Dispatch<SetStateAction<number>>;
  rating: number;
  isEdit: boolean;
  el: IBoardComment;
}

export interface ICommentWriteProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  // setIsEdit: Dispatch<SetStateAction<boolean>>;
  el: IBoardComment;
}

export interface IUpdateBoardCommentInput {
  contents: string;
  rating?: number;
}
