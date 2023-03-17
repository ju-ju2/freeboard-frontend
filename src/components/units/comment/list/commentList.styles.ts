import styled from "@emotion/styled";
import { Rate } from "antd";

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 100px; */
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
`;
export const IconAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
export const CommentAlign = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const WriterStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const Writer = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-right: 16px;
`;
export const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconStar = styled.img`
  width: 18px;
  height: 18px;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
export const ModifyButton = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const DeleteButton = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const Comment = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 25px;
`;
export const Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const Star = styled(Rate)`
  padding-left: 20px;
`;
