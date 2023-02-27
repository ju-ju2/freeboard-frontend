import * as S from "./commentList.styles";

export default function CommentListUI() {
  return (
    <S.AllWrapper>
      <S.Container>
        <S.CommentWrapper>
          <S.IconAvatar src="../../img/icon-pageMan.png"></S.IconAvatar>
          <S.CommentAlign>
            <S.WriterStarWrapper>
              <S.Writer>한주연</S.Writer>
              <S.StarWrapper>
                <S.IconStar src="../../img/icon-starYellow.png"></S.IconStar>
                <S.IconStar src="../../img/icon-starYellow.png"></S.IconStar>
                <S.IconStar src="../../img/icon-starYellow.png"></S.IconStar>
                <S.IconStar src="../../img/icon-starGray.png"></S.IconStar>
                <S.IconStar src="../../img/icon-starGray.png"></S.IconStar>
              </S.StarWrapper>
              <S.ButtonBox>
                <S.MutationButton src="../../img/icon-modify.png"></S.MutationButton>
                <S.MutationButton src="../../img/icon-x.png"></S.MutationButton>
              </S.ButtonBox>
            </S.WriterStarWrapper>
            <S.Comment>진짜 좋네요~ 감사합니다~!</S.Comment>
            <S.Date>2023.02.02</S.Date>
          </S.CommentAlign>
        </S.CommentWrapper>
      </S.Container>
    </S.AllWrapper>
  );
}
