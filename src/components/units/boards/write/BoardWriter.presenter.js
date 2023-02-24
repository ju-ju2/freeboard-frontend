import * as S from "./BoardWriter.styles";

export default function FreeBoardWriteUI(props) {
  return (
    <S.AllWrapper>
      <S.Wrapper>
        <S.Headline>게시글 등록</S.Headline>
        <S.UserWrapper>
          <S.MainFormat>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
            ></S.Writer>
            <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
          </S.MainFormat>
          <S.MainFormat>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 적어주세요"
              onChange={props.onChangePassword}
            ></S.Password>
            <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
          </S.MainFormat>
        </S.UserWrapper>

        <S.MainFormat>
          <S.Label>제목</S.Label>
          <S.ContentsTitle
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={props.onChangeContentsTitle}
          ></S.ContentsTitle>
          <S.ErrorMessage>{props.contentsTitleError}</S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>내용</S.Label>
          <S.Contents
            type="text"
            placeholder="내용을 작성해주세요"
            onChange={props.onChangeContents}
          ></S.Contents>
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>주소</S.Label>
          <S.Address__wrapper>
            <S.AddressNum type="text" placeholder="07250"></S.AddressNum>
            <S.AddressNum__search>우편번호검색</S.AddressNum__search>
          </S.Address__wrapper>
          <S.Address__input></S.Address__input>
          <S.Address__input></S.Address__input>
          <S.ErrorMessage></S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>유튜브</S.Label>
          <S.YoutubeLink
            type="text"
            placeholder="링크를 복사해주세요"
          ></S.YoutubeLink>
          <S.ErrorMessage></S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>사진첨부</S.Label>
          <S.Picture__wrapper>
            <S.Upload__picture>+</S.Upload__picture>
            <S.Upload__picture>+</S.Upload__picture>
            <S.Upload__picture>+</S.Upload__picture>
          </S.Picture__wrapper>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>메인 설정</S.Label>
          <S.Radio__wrapper>
            <S.RadioButton
              type="radio"
              id="youtube"
              name="radio-button"
              value="유튜브"
            ></S.RadioButton>
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioButton
              type="radio"
              id="image"
              name="radio-button"
              value="사진"
            ></S.RadioButton>
            <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
          </S.Radio__wrapper>
        </S.MainFormat>
        <S.Upload__button onClick={props.onClickUpload}>
          등록하기
        </S.Upload__button>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
