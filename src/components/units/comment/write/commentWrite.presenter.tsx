import * as S from "./commentWrite.styles";
import { ICommentWriteUIProps } from "./commentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.AllWrapper>
      <S.Container>
        {!props.isEdit && (
          <S.TitleWrapper>
            <S.IconComment src="../../img/icon-comment.png"></S.IconComment>
            <S.Title>댓글</S.Title>
          </S.TitleWrapper>
        )}
        <S.UserWrapper>
          <S.UserInfo
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer || (props.el?.writer ?? "")}
            // value값을 주는 이유는 등록하기 버튼을 눌렀을때 다시 빈칸을 보여주려고 이다.
            // 수정하기버튼에서는 defaultValue값이 필요한데 value가 있을때는 defaultValue값을 못넣으니 위의 구문을 만든것
            readOnly={!!props.el?.writer}
          ></S.UserInfo>
          <S.UserInfo
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          ></S.UserInfo>
          <S.Star
            onChange={props.setRating}
            value={props.rating || (props.el?.rating ?? 0)}
          />
        </S.UserWrapper>
        <S.CommentWrapper>
          <S.Comment
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.contents || (props.el?.contents ?? "")}
          ></S.Comment>
          <S.UploadWrapper>
            <S.StringNum>
              {(props.contents
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /100
            </S.StringNum>

            <S.UploadButton
              onClick={
                props.isEdit
                  ? props.onClickUpdateComment
                  : props.onClickUploadComment
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.UploadButton>
          </S.UploadWrapper>
        </S.CommentWrapper>
      </S.Container>
    </S.AllWrapper>
  );
}
