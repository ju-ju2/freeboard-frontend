import FreeBoardDetail from "@/src/components/units/boards/detail/BoardDetail.container";
import CommentList from "@/src/components/units/comment/list/commentList.container";
import CommentWrite from "@/src/components/units/comment/write/commentWrite.container";

export default function BoardId() {
  return (
    <>
      <FreeBoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
