import { useQuery } from "@apollo/client";
import CommentListUI from "./commentList.presenter";
import { FETCH_BOARDS } from "./commentList.queries";

export default function CommentList() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return <CommentListUI data={data} />;
}
