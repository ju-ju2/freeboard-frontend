import { MouseEvent } from "react";

export interface IPageNation01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickToPre: () => void;
  onClickToNext: () => void;
  onClickPageNumber: (event: MouseEvent<HTMLDivElement>) => void;
}
