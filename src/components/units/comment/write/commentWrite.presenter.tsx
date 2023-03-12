import { Rate } from "antd";
import * as S from "./commentWrite.styles";
import { ICommentWriteUIProps } from "./commentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.AllWrapper>
      <S.Container>
        <S.TitleWrapper>
          <S.IconComment src="../../img/icon-comment.png"></S.IconComment>
          <S.Title>댓글</S.Title>
        </S.TitleWrapper>
        <S.UserWrapper>
          <S.UserInfo
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></S.UserInfo>
          <S.UserInfo
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.UserInfo>
          <S.Star onChange={props.setRating} allowHalf />
        </S.UserWrapper>
        <S.CommentWrapper>
          <S.Comment
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.Comment>
          <S.UploadWrapper>
            <S.StringNum>{props.contents.length}/100</S.StringNum>
            <S.UploadButton onClick={props.onClickUploadComment}>
              등록하기
            </S.UploadButton>
          </S.UploadWrapper>
        </S.CommentWrapper>
      </S.Container>
    </S.AllWrapper>
  );
}
