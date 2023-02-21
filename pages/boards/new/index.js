import {
  Address__wrapper,
  Body,
  Headline,
  MainFormat,
  MainFormat__input,
  MainFormat__input__address,
  MainFormat__input__contents,
  MainFormat__input__search,
  MainFormat__name,
  Picture__wrapper,
  Radio,
  Upload__button,
  Upload__picture,
  UserWrapper,
  Wrapper,
} from "@/styles/emotion";

export default function UploadPage() {
  // 여기는 자바스크립트
  return (
    // 여기는 html
    <Body>
      <Wrapper>
        <Headline>게시물 등록</Headline>
        <UserWrapper>
          <MainFormat>
            <MainFormat__name>작성자</MainFormat__name>
            <MainFormat__input placeholder="이름을 적어주세요"></MainFormat__input>
          </MainFormat>
          <MainFormat>
            <MainFormat__name>비밀번호</MainFormat__name>
            <MainFormat__input placeholder="비밀번호를 적어주세요"></MainFormat__input>
          </MainFormat>
        </UserWrapper>
        <MainFormat>
          <MainFormat__name>제목</MainFormat__name>
          <MainFormat__input placeholder="제목을 작성해주세요"></MainFormat__input>
        </MainFormat>
        <MainFormat>
          <MainFormat__name>내용</MainFormat__name>
          <MainFormat__input__contents placeholder="내용을 작성해주세요"></MainFormat__input__contents>
        </MainFormat>
        <MainFormat>
          <MainFormat__name>주소</MainFormat__name>
          <Address__wrapper>
            <MainFormat__input__address placeholder="07250"></MainFormat__input__address>
            <MainFormat__input__search>우편번호검색</MainFormat__input__search>
          </Address__wrapper>
          <MainFormat__input></MainFormat__input>
          <MainFormat__input></MainFormat__input>
        </MainFormat>
        <MainFormat>
          <MainFormat__name>유튜브</MainFormat__name>
          <MainFormat__input placeholder="링크를 복사해주세요"></MainFormat__input>
        </MainFormat>
        <MainFormat>
          <MainFormat__name>사진첨부</MainFormat__name>
          <Picture__wrapper>
            <Upload__picture></Upload__picture>
            <Upload__picture></Upload__picture>
            <Upload__picture></Upload__picture>
          </Picture__wrapper>
        </MainFormat>
        <MainFormat>
          <MainFormat__name>메인 설정</MainFormat__name>
          <Picture__wrapper>
            <Radio type="radio" name="contents" value="유튜브"></Radio>
            <Radio type="radio" name="contents" value="사진"></Radio>
          </Picture__wrapper>
        </MainFormat>
        <Upload__button>등록하기</Upload__button>
      </Wrapper>
    </Body>
  );
}
