import * as S from "./commentList.styles";

export default function CommentListUI(props) {
  return (
    <S.AllWrapper>
      <S.Container>
        {props.data?.fetchBoards.map((el) => (
          <S.CommentWrapper>
            <S.IconAvatar src="../../img/icon-pageMan.png"></S.IconAvatar>
            <S.CommentAlign>
              <S.WriterStarWrapper>
                <S.Writer>{el.writer}</S.Writer>
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
              <S.Comment>{el.contents}</S.Comment>
              <S.Date>{el.createdAt}</S.Date>
            </S.CommentAlign>
          </S.CommentWrapper>
        ))}
      </S.Container>
    </S.AllWrapper>
  );
}
