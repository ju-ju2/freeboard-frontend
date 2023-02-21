import styled from "@emotion/styled";

export const Body = styled.body`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: center;
  //   background-color: aqua;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: space-between;
  width: 996px;
  margin: 30px;
  //   background-color: red;
`;

export const Headline = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 60px 0;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
  width: 100%;
`;

export const MainFormat = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: flex-start;
  width: 100%;
  //   background-color: yellow;
`;

export const MainFormat__name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const MainFormat__input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
`;

export const MainFormat__input__contents = styled.input`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
`;

export const Address__wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainFormat__input__address = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin: 0 10px 10px 0;
`;

export const MainFormat__input__search = styled.button`
  width: 124px;
  height: 56px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

export const Picture__wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const Upload__picture = styled.div`
  width: 78px;
  height: 78px;
  background-color: gray;
  margin-right: 20px;
`;
export const Radio = styled.input`
  color: red;
`;
export const Upload__button = styled.button`
  width: 179px;
  height: 52px;
  background-color: yellow;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;
