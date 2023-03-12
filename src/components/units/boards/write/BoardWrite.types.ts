import { ModalStaticFunctions } from "antd/es/modal/confirm";
import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IUploadButtonProps {
  isActive: boolean;
}

export interface IFreeBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickUpload: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  isPasswordProblem: boolean;
}
