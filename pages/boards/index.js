// 보드의 목록 부분
import {
  BoarderLine,
  BoardListWrapper,
  ButtonText,
  CardListWrapper,
  CardWrapper,
  IconSearch,
  IconWrite,
  ListColumn,
  ListColumnNum,
  ListColumnTime,
  ListColumnTitle,
  ListColumnWriter,
  ListRow,
  ListWrapper,
  List_uploadButton,
  SearchButton,
  SearchTitle,
  SearchTitleInput,
  SearchWrapper,
  SearchYear,
  Title,
} from "@/styles/emotion";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function ListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  const router = useRouter();

  //   for (let i = 1; i <= 10; i++) {
  //     const num = (i = i + 1);
  //     return num;
  //   }

  const onClickWriteBoard = () => {
    router.push("./new");
  };

  return (
    <>
      <ListWrapper>
        <Title>베스트 게시물</Title>
        <CardListWrapper>
          <CardWrapper></CardWrapper>
          <CardWrapper></CardWrapper>
          <CardWrapper></CardWrapper>
          <CardWrapper></CardWrapper>
        </CardListWrapper>
        <SearchWrapper>
          <SearchTitle>
            <IconSearch src="../../img/icon-search.png"></IconSearch>
            <SearchTitleInput placeholder="제목을 검색해주세요"></SearchTitleInput>
          </SearchTitle>
          <SearchYear></SearchYear>
          <SearchButton>검색하기</SearchButton>
        </SearchWrapper>
        <BoardListWrapper>
          <ListRow>
            <ListColumn>번호</ListColumn>
            <ListColumn>제목</ListColumn>
            <ListColumn>작성자</ListColumn>
            <ListColumn>날짜</ListColumn>
          </ListRow>
          {data?.fetchBoards.map((el) => (
            <ListRow>
              <ListColumnNum>1</ListColumnNum>
              <ListColumnTitle>{el.title}</ListColumnTitle>
              <ListColumnWriter>{el.writer}</ListColumnWriter>
              <ListColumnTime>{el.createdAt}</ListColumnTime>
            </ListRow>
          ))}
        </BoardListWrapper>
        <List_uploadButton>
          <IconWrite src="../../img/icon-write.png"></IconWrite>
          <ButtonText onClick={onClickWriteBoard}>게시물 등록하기</ButtonText>
        </List_uploadButton>
      </ListWrapper>
    </>
  );
}
