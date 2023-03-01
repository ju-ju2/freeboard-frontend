import * as S from "./BoardDetail.styles";
import { IFreeBoardDetailUIProps } from "./BoardDetail.types";

export default function FreeBoardDetailUI(props: IFreeBoardDetailUIProps) {
  return (
    <S.AllWrapper>
      <S.Wrapper>
        <S.InBoardHeader>
          <S.IconBig src="../../img/icon-pageMan.png"></S.IconBig>
          <S.NameDateWrapper>
            <S.InBoardWriter>{props.data?.fetchBoard.writer}</S.InBoardWriter>
            <S.InBoardDate>
              Date : {props.data?.fetchBoard.createdAt}
            </S.InBoardDate>
          </S.NameDateWrapper>
          <S.IconLink src="../../img/icon-link.png"></S.IconLink>
          <S.IconLocation src="../../img/icon-location.png"></S.IconLocation>
        </S.InBoardHeader>
        <S.InBoardBody>
          <S.InBoardTitle>{props.data?.fetchBoard.title}</S.InBoardTitle>
          <S.InBoardContentsImg></S.InBoardContentsImg>
          <S.InBoardContents>
            {props.data?.fetchBoard.contents}
          </S.InBoardContents>
        </S.InBoardBody>
        <S.InBoardFooter>
          <S.LikeWrapper>
            <S.IconLike src="../../img/icon-good.png"></S.IconLike>
            <S.LikeNum>{props.data?.fetchBoard.likeCount}</S.LikeNum>
          </S.LikeWrapper>
          <S.LikeWrapper>
            <S.IconLike src="../../img/icon-bad.png"></S.IconLike>
            <S.DislikeNum>{props.data?.fetchBoard.likeCount}</S.DislikeNum>
          </S.LikeWrapper>
        </S.InBoardFooter>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.InBoardButton onClick={props.onClickMoveToBoards}>
          목록으로
        </S.InBoardButton>
        <S.InBoardButton onClick={props.onClickMoveToEdit}>
          수정하기
        </S.InBoardButton>
        <S.InBoardButton>삭제하기</S.InBoardButton>
      </S.ButtonWrapper>
    </S.AllWrapper>
  );
}
