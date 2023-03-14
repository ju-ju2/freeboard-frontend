import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface IPageNumberProps {
  isActive: boolean;
}

export const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const PageNumber = styled.div`
  font-size: 16px;
  width: 40px;
  cursor: pointer;

  :hover {
    color: gray;
  }

  color: ${(props: IPageNumberProps) => (props.isActive ? "orange" : "black")};
  text-decoration: ${(props: IPageNumberProps) =>
    props.isActive ? "underline" : "none"};
`;
export const ToNext = styled(RightOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: gray;
  }
`;
export const ToPre = styled(LeftOutlined)`
  height: 18px;
  cursor: pointer;
  padding: 3px 30px;
  :hover {
    color: gray;
  }
`;
