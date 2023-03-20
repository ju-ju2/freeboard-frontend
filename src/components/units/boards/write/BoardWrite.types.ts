import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images: string[];
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
  addressOpen: boolean;
  onClickAddress: () => void;
  handleComplete: (address: Address) => void;
  zipcode: string;
  address: string;
  // addressDetail: string;
  onClickAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  // youtubeUrl: string;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  imageUrls: string[];
}
