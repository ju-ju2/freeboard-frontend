import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffd600;
  font-size: 18px;
  color: white;
`;

export const MainText = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
    font-weight: 500;
  }
`;
