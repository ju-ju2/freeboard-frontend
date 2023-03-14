import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
export const PageNumber = styled.div`
  font-size: 16px;
  width: 40px;
  cursor: pointer;

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
export const ToNext = styled(RightOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: orange;
  }
`;
export const ToPre = styled(LeftOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: orange;
  }
`;
