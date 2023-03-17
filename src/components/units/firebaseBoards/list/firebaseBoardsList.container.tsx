import styled from "@emotion/styled";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { firebaseApp } from "../../../../commons/libraries/firebase";

// //////////////////CSS/////////////////////
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 20px;
  margin-right: 20px;
`;
export const FetchButton = styled.button`
  width: 100px;
  height: 40px;
`;
export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid gray;
`;
export const RowMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid gray;
  font-weight: 600;
`;
export const ColumnMainNum = styled.div`
  width: 10%;
`;
export const ColumnMainTitle = styled.div`
  width: 50%;
`;
export const ColumnMainWrier = styled.div`
  width: 20%;
`;
export const ColumnMainDate = styled.div`
  width: 20%;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
  :hover {
    color: orange;
  }
`;

export const WriteButton = styled.button`
  width: 100px;
  height: 40px;
`;

// ////////////////////////////////////////

export default function FirebaseBoardsList() {
  const [listData, setListData] = useState<DocumentData[]>([]);
  const router = useRouter();

  const onClickShowBoards = async () => {
    const firebaseBoard = collection(
      getFirestore(firebaseApp),
      "FirebaseBoard"
    );
    const result = await getDocs(firebaseBoard);
    const data = result.docs.map((el) => el.data());
    setListData(data);
  };

  const onClickMoveToWrite = () => {
    void router.push("./firebaseBoards/new");
  };

  //   const onClickTitle = ()=>{
  //     void router.push(`./firebaseBoards/`)
  //   }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>🔥 파이어베이스를 이용한 게시판 입니다</Title>
        <Button
          onClick={onClickShowBoards}
          type="primary"
          icon={<SearchOutlined />}
        >
          게시물보기
        </Button>
      </TitleWrapper>
      <TableWrapper>
        <RowMain>
          <ColumnMainNum>번호</ColumnMainNum>
          <ColumnMainTitle>제목</ColumnMainTitle>
          <ColumnMainWrier>작성자</ColumnMainWrier>
          <ColumnMainDate>날짜</ColumnMainDate>
        </RowMain>
        {listData.map((el, index) => (
          <Row key={index}>
            <ColumnMainNum>{index + 1}</ColumnMainNum>
            <ColumnMainTitle>{el.title}</ColumnMainTitle>
            <ColumnMainWrier>{el.writer}</ColumnMainWrier>
            <ColumnMainDate>{el.timeStamp}</ColumnMainDate>
          </Row>
        ))}
      </TableWrapper>

      <WriteButton onClick={onClickMoveToWrite}>게시물 작성</WriteButton>
    </Wrapper>
  );
}
