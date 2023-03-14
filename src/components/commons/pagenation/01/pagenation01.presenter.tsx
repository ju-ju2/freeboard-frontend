import { IPageNation01UIProps } from "./pagenation01.types";
import * as S from "./pagenation01.styles";

export default function PageNation01UI(props: IPageNation01UIProps) {
  return (
    <>
      <S.PageNumberWrapper>
        <S.ToPre onClick={props.onClickToPre} />
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <S.PageNumber
                onClick={props.onClickPageNumber}
                key={index + props.startPage}
                id={String(index + props.startPage)}
              >
                {index + props.startPage}
              </S.PageNumber>
            )
        )}
        <S.ToNext onClick={props.onClickToNext} />
      </S.PageNumberWrapper>
    </>
  );
}
