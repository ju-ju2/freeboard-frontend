import styled from "@emotion/styled";

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0;
  border-top: 1px solid #bdbdbd;
`;
export const IconComment = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;
export const UserInfo = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  background: none;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
`;
export const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconStar = styled.img`
  width: 20px;
  height: 20px;
`;
export const CommentWrapper = styled.div`
  display: flex;
  border: 1px solid #bdbdbd;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Comment = styled.textarea`
  padding: 20px;
  padding-left: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  height: 108px;
`;
export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StringNum = styled.div`
  padding: 20px 0 0 20px;
`;
export const UploadButton = styled.button`
  width: 91px;
  height: 52px;
  padding: 20px;
  background-color: black;
  color: white;
  margin-left: auto;
`;
