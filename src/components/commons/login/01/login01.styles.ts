import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 30px;
`;
export const MyInput = styled(Input)`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
`;
export const MyButton = styled(Button)`
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const Dash = styled.div`
  width: 500px;
  height: 20px;
  border-top: 2px solid lightgray;
`;
