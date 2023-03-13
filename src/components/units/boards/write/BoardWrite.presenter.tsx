import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.styles";
import { IFreeBoardWriteUIProps } from "./BoardWrite.types";

export default function FreeBoardWriteUI(props: IFreeBoardWriteUIProps) {
  return (
    <S.AllWrapper>
      <S.Wrapper>
        <S.Headline>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Headline>
        <S.UserWrapper>
          <S.MainFormat>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
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
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></S.ContentsTitle>
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>주소</S.Label>
          <S.Address__wrapper>
            <S.AddressNum
              type="text"
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            ></S.AddressNum>
            <S.AddressNum__search onClick={props.onClickAddress}>
              우편번호검색
            </S.AddressNum__search>
            {props.addressOpen && (
              <Modal
                open={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcodeEmbed onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.Address__wrapper>
          <S.Address__input
            placeholder="주소를 입력해주세요"
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          ></S.Address__input>
          <S.Address__input
            placeholder="상세주소를 입력해주세요"
            onChange={props.onClickAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          ></S.Address__input>
          <S.ErrorMessage></S.ErrorMessage>
        </S.MainFormat>
        <S.MainFormat>
          <S.Label>유튜브</S.Label>
          <S.YoutubeLink
            type="text"
            placeholder="링크를 입력해주세요"
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
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
        <S.Upload__button
          onClick={props.isEdit ? props.onClickEdit : props.onClickUpload}
          isActive={props.isEdit ? true : props.isActive}
          // 게시글은 일부만 수정해도 수정되기 때문에 늘 노란색을 띄고 있도록
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.Upload__button>
        <Modal
          title="error"
          open={props.isModalOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          {props.isPasswordProblem ? (
            <p>비밀번호를 입력해주세요</p>
          ) : (
            <p>수정한 내용이 없습니다</p>
          )}
        </Modal>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
