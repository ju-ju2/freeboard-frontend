import { IQuery } from "../../../../commons/types/generated/types";

export interface IFreeBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToEdit: () => void;
  onClickMoveToBoards: () => void;
  onClickDeleteBoard: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
