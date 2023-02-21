import styled from "@emotion/styled";

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

export const Headline = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainFormat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
  //   background-color: yellow;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
`;

export const ContentsTitle = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 20px;
`;

export const Address__wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddressNum = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin: 0 10px 10px 0;
  padding-left: 20px;
`;

export const AddressNum__search = styled.button`
  width: 124px;
  height: 52px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

export const Address__input = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const Picture__wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const Upload__picture = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  border: none;
  margin-right: 20px;
`;

export const Radio__wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  font-weight: 500;
  margin: 0 10px;
`;

export const Upload__button = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  font-size: 10px;
  color: red;
  margin: 10px 0 0 20px;
`;
