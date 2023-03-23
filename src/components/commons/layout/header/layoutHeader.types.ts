import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickSignin: () => void;
  onClickLogOut: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
