import InfiniteScroll from "react-infinite-scroller";
import CommentListUIItem from "./commentList.presenterItem";
import { ICommentListUIProps } from "./commentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el, index) => (
          <CommentListUIItem el={el} key={el._id} />
        ))}
      </InfiniteScroll>
    </>
  );
}
