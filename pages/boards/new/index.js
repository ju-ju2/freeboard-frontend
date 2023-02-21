import {
  Address__wrapper,
  Headline,
  MainFormat,
  YoutubeLink,
  AddressNum,
  Contents,
  AddressNum__search,
  Label,
  Picture__wrapper,
  RadioButton,
  Upload__button,
  Upload__picture,
  UserWrapper,
  Wrapper,
  Password,
  Writer,
  ContentsTitle,
  Address__input,
  RadioLabel,
  Radio__wrapper,
} from "@/styles/emotion";

export default function UploadPage() {
  // 여기는 자바스크립트
  return (
    // 여기는 html
    <Wrapper>
      <Headline>게시물 등록</Headline>
      <UserWrapper>
        <MainFormat>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요"></Writer>
        </MainFormat>
        <MainFormat>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 적어주세요"
          ></Password>
        </MainFormat>
      </UserWrapper>

      <MainFormat>
        <Label>제목</Label>
        <ContentsTitle
          type="text"
          placeholder="제목을 작성해주세요"
        ></ContentsTitle>
      </MainFormat>
      <MainFormat>
        <Label>내용</Label>
        <Contents type="text" placeholder="내용을 작성해주세요"></Contents>
      </MainFormat>
      <MainFormat>
        <Label>주소</Label>
        <Address__wrapper>
          <AddressNum type="text" placeholder="07250"></AddressNum>
          <AddressNum__search>우편번호검색</AddressNum__search>
        </Address__wrapper>
        <Address__input></Address__input>
        <Address__input></Address__input>
      </MainFormat>
      <MainFormat>
        <Label>유튜브</Label>
        <YoutubeLink placeholder="링크를 복사해주세요"></YoutubeLink>
      </MainFormat>
      <MainFormat>
        <Label>사진첨부</Label>
        <Picture__wrapper>
          <Upload__picture>+</Upload__picture>
          <Upload__picture>+</Upload__picture>
          <Upload__picture>+</Upload__picture>
        </Picture__wrapper>
      </MainFormat>
      <MainFormat>
        <Label>메인 설정</Label>
        <Radio__wrapper>
          <RadioButton
            type="radio"
            id="youtube"
            name="radio-button"
            value="유튜브"
          ></RadioButton>
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton
            type="radio"
            id="image"
            name="radio-button"
            value="사진"
          ></RadioButton>
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </Radio__wrapper>
      </MainFormat>
      <Upload__button>등록하기</Upload__button>
    </Wrapper>
  );
}
