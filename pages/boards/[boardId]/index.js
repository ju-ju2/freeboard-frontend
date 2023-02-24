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

export default function BoardId() {
  return (
    <AllWrapper>
      <Wrapper>
        <InBoardHeader>
          <IconBig src="../../img/icon-pageMan.png"></IconBig>
          <NameDateWrapper>
            <InBoardWriter>노원두</InBoardWriter>
            <InBoardDate>Date : 2021.02.18</InBoardDate>
          </NameDateWrapper>
          <IconLink src="../../img/icon-link.png"></IconLink>
          <IconLocation src="../../img/icon-location.png"></IconLocation>
        </InBoardHeader>
        <InBoardBody>
          <InBoardTitle>게시글 제목</InBoardTitle>
          <InBoardContentsImg></InBoardContentsImg>
          <InBoardContents>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </InBoardContents>
        </InBoardBody>
        <InBoardFooter>
          <LikeWrapper>
            <IconLike src="../../img/icon-good.png"></IconLike>
            <LikeNum>1920</LikeNum>
          </LikeWrapper>
          <LikeWrapper>
            <IconLike src="../../img/icon-bad.png"></IconLike>
            <DislikeNum>1920</DislikeNum>
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
