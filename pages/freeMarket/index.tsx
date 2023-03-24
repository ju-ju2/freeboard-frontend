import styled from "@emotion/styled";

export const MarketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  margin: 60px 0 40px 0;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
  width: 1200px;
`;

export const CardWrapper = styled.div`
  width: 282px;
  height: 391px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const BestImg = styled.img`
  width: 100%;
  height: 282px;
  background-color: coral;
  margin-bottom: 10px;
`;
export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const CardSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  margin-bottom: 20px;
`;
export const PriceHeartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const MyHeart = styled.div``;
export const MyHeartCount = styled.div`
  font-size: 16px;
`;

export const ItemWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemImg = styled.img``;

export default function FreeMarket() {
  return (
    <MarketWrapper>
      <Title>베스트 상품</Title>
      <CardListWrapper>
        <CardWrapper></CardWrapper>
        <CardWrapper>
          <BestImg />
          <CardTitle>삼성전자 갤럭시탭A 10.1</CardTitle>
          <CardSubTitle>2019 LTE 32GB</CardSubTitle>
          <PriceHeartWrapper>
            <Price>240,120원</Price>
            <HeartWrapper></HeartWrapper>
          </PriceHeartWrapper>
        </CardWrapper>
        <CardWrapper></CardWrapper>
        <CardWrapper></CardWrapper>
      </CardListWrapper>
      <ItemWrapper></ItemWrapper>
    </MarketWrapper>
  );
}
