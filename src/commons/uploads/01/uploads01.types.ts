import { ChangeEvent, MouseEvent, RefObject } from "react";

export interface IUploads01UIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImg: (event: MouseEvent<HTMLImageElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
}

export interface IUploads01Props {
  fileUrl: string;
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  index: number;
}
