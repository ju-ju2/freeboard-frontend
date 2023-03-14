import { Modal, Rate } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { GetDate } from "../../../../commons/utils/utils";
import * as S from "./commentList.styles";
import { ICommentListUIProps } from "./commentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.AllWrapper>
      {props.isDeleteModalOpen && (
        <Modal
          title="비밀번호를 입력하세요"
          open={true}
          onOk={props.onClickDelete}
        >
          <input onChange={props.onChangePassword} type="password"></input>
        </Modal>
      )}
      {props.data?.fetchBoardComments.map((el, index) => (
        <S.Container key={index}>
          <S.CommentWrapper
            // onClick={props.onClickComment}
            id={String(el.writer)}
          >
            <S.IconAvatar src="../../img/icon-pageMan.png"></S.IconAvatar>
            <S.CommentAlign>
              <S.WriterStarWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <S.Star allowHalf value={el.rating} disabled />
                <S.ButtonBox>
                  <S.ModifyButton src="../../img/icon-modify.png"></S.ModifyButton>
                  <S.DeleteButton
                    id={el._id}
                    src="../../img/icon-x.png"
                    onClick={props.onClickOpenDeleteModal}
                  ></S.DeleteButton>
                </S.ButtonBox>
              </S.WriterStarWrapper>
              <S.Comment>{el.contents}</S.Comment>
              <S.Date>{GetDate(el.createdAt)}</S.Date>
            </S.CommentAlign>
          </S.CommentWrapper>
        </S.Container>
      ))}
    </S.AllWrapper>
  );
}
