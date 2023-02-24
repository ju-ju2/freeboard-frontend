import {
  AllWrapper,
  ButtonWrapper,
  DislikeNum,
  IconBig,
  IconLike,
  IconLink,
  IconLocation,
  InBoardBody,
  InBoardButton,
  InBoardContents,
  InBoardContentsImg,
  InBoardDate,
  InBoardFooter,
  InBoardHeader,
  InBoardTitle,
  InBoardWriter,
  LikeNum,
  LikeWrapper,
  NameDateWrapper,
  Wrapper,
} from "@/styles/emotion";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;

export default function BoardId() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    // router.query.boardId의 boardId는 폴더명과 같다. [폴더명: 변수]
  });
  console.log(data);

  return (
    <AllWrapper>
      <Wrapper>
        <InBoardHeader>
          <IconBig src="../../img/icon-pageMan.png"></IconBig>
          <NameDateWrapper>
            <InBoardWriter>{data?.fetchBoard.writer}</InBoardWriter>
            <InBoardDate>Date : {data?.fetchBoard.createdAt}</InBoardDate>
          </NameDateWrapper>
          <IconLink src="../../img/icon-link.png"></IconLink>
          <IconLocation src="../../img/icon-location.png"></IconLocation>
        </InBoardHeader>
        <InBoardBody>
          <InBoardTitle>{data?.fetchBoard.title}</InBoardTitle>
          <InBoardContentsImg></InBoardContentsImg>
          <InBoardContents>{data?.fetchBoard.contents}</InBoardContents>
        </InBoardBody>
        <InBoardFooter>
          <LikeWrapper>
            <IconLike src="../../img/icon-good.png"></IconLike>
            <LikeNum>{data?.fetchBoard.likeCount}</LikeNum>
          </LikeWrapper>
          <LikeWrapper>
            <IconLike src="../../img/icon-bad.png"></IconLike>
            <DislikeNum>{data?.fetchBoard.likeCount}</DislikeNum>
          </LikeWrapper>
        </InBoardFooter>
      </Wrapper>
      <ButtonWrapper>
        <InBoardButton>목록으로</InBoardButton>
        <InBoardButton>수정하기</InBoardButton>
        <InBoardButton>삭제하기</InBoardButton>
      </ButtonWrapper>
    </AllWrapper>
  );
}
