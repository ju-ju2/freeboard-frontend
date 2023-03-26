import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./boardList02.queries";
import * as S from "./boardList02.styles";

export default function BoardList02() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onLoadMore = () => {};
  const onClickUpload = () => {
    void router.push("/freeMarket/new");
  };

  return (
    <>
      <S.MarketWrapper>
        <S.Title>베스트 상품</S.Title>
        <S.CardListWrapper>
          <S.CardWrapper></S.CardWrapper>
          <S.CardWrapper>
            <S.BestImg />
            <S.CardTitle>삼성전자 갤럭시탭A 10.1</S.CardTitle>
            <S.CardSubTitle>2019 LTE 32GB</S.CardSubTitle>
            <S.PriceHeartWrapper>
              <S.BestPrice>240,120원</S.BestPrice>
              <S.HeartWrapper></S.HeartWrapper>
            </S.PriceHeartWrapper>
          </S.CardWrapper>
          <S.CardWrapper></S.CardWrapper>
          <S.CardWrapper></S.CardWrapper>
        </S.CardListWrapper>
        <S.ButtonUpload onClick={onClickUpload}>게시물 등록</S.ButtonUpload>

        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{ width: "100%" }}
        >
          {data?.fetchUseditems.map((el) => (
            <>
              <S.Dash></S.Dash>
              <S.ListItemWrapper key={el._id}>
                <S.ImgBox
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.TextWrapper>
                  <S.ListTitle>{el.name}</S.ListTitle>
                  <S.SubTitle>{el.remarks}</S.SubTitle>
                  <S.Writer>{el.seller?.name}</S.Writer>
                  <S.PickedCount>🧡 {el.pickedCount}</S.PickedCount>
                </S.TextWrapper>
                <S.Price>{el.price}원</S.Price>
              </S.ListItemWrapper>
            </>
          ))}
        </InfiniteScroll>
      </S.MarketWrapper>
    </>
  );
}
