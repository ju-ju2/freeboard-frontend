import styled from "@emotion/styled";

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 80px 102px 100px 102px;
  //   background-color: red;
`;

//  게시물 보여주기 페이지

export const InBoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 996px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
`;

export const NameDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  margin-right: auto;
`;
export const InBoardWriter = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const InBoardDate = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const IconBig = styled.img`
  width: 47px;
  height: 47px;
  margin-right: 20px;
`;
export const IconSmall = styled.img`
  // width: 47px;
  height: 47px;
  // padding: 10px;
`;

export const IconLink = styled.img`
  height: 47px;
  padding: 12px;
  margin-right: 10px;
`;

export const IconLocation = styled.img`
  height: 47px;
  // padding: 10px;
`;

export const InBoardBody = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InBoardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;
export const InBoardContentsImg = styled.img`
  margin-bottom: 40px;
  width: 996px;
  height: 408px;
  object-fit: contain;
`;
export const InBoardContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const InBoardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const IconLike = styled.img`
  height: 47px;
  padding: 8px;
  margin: 5px;
  cursor: pointer;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeNum = styled.div`
  color: #ffd600;
  font-size: 18px;
`;

export const DislikeNum = styled.div`
  color: #828282;
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const InBoardButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin: 0 12px;
  cursor: pointer;
`;
