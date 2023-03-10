import { Rate } from "antd";
import { GetDate } from "../../../../commons/utils/utils";
import * as S from "./commentList.styles";
import { ICommentListUIProps } from "./commentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.AllWrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Container key={el}>
          <S.CommentWrapper onClick={props.onClickComment} id={el.writer}>
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
                    onClick={props.onClickDelete}
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
