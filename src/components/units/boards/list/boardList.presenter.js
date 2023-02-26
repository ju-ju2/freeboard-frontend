import { GetDate } from "@/src/commons/utils/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <>
      <S.ListWrapper>
        <S.Title>베스트 게시물</S.Title>
        <S.CardListWrapper>
          <S.CardWrapper></S.CardWrapper>
          <S.CardWrapper></S.CardWrapper>
          <S.CardWrapper></S.CardWrapper>
          <S.CardWrapper></S.CardWrapper>
        </S.CardListWrapper>
        <S.SearchWrapper>
          <S.SearchTitle>
            <S.IconSearch src="../../img/icon-search.png"></S.IconSearch>
            <S.SearchTitleInput placeholder="제목을 검색해주세요"></S.SearchTitleInput>
          </S.SearchTitle>
          <S.SearchYear></S.SearchYear>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchWrapper>
        <S.BoardListWrapper>
          <S.ListRow>
            <S.ListColumnBasic>번호</S.ListColumnBasic>
            <S.ListColumnBasicTitle>제목</S.ListColumnBasicTitle>
            <S.ListColumnBasic>작성자</S.ListColumnBasic>
            <S.ListColumnBasic>날짜</S.ListColumnBasic>
          </S.ListRow>
          {props.data?.fetchBoards.map((el, index) => (
            <S.ListRow key={el._id}>
              <S.ColumnBasic>
                {/* {String(el._id).slice(-4).toUpperCase()} */}
                {index + 1}
              </S.ColumnBasic>
              <S.ColumnTitle id={el._id} onClick={props.onClickListTitle}>
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{GetDate(el.createdAt)}</S.ColumnBasic>
            </S.ListRow>
          ))}
        </S.BoardListWrapper>
        <S.List_uploadButton>
          <S.IconWrite src="../../img/icon-write.png"></S.IconWrite>
          <S.ButtonText onClick={props.onClickWriteBoard}>
            게시물 등록하기
          </S.ButtonText>
        </S.List_uploadButton>
      </S.ListWrapper>
      ;
    </>
  );
}
