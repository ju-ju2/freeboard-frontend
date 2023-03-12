import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ICommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUploadComment: () => void;
  contents: string;
  setRating: Dispatch<SetStateAction<number>>;
}
