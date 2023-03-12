// import FreeBoardWrite from "@/src/components/units/boards/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import FreeBoardWrite from "../../../../src/components/units/boards/write/BoardWrite.container";

export const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

//현재 보드에 패치보드해서 등록된 게시물을 디폴트벨루값으로 보여줘야한다
export default function UploadPage() {
  const router = useRouter();

  // if(typeof router.query.boardId !== "string"){
  //   router.push('/')
  //   return <></>
  //   //아래쪽이 실행이 되지않고 기본페이지(/)가 보여지기전에 빈페이지(<></>)를 리턴한다
  // }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return <FreeBoardWrite isEdit={true} data={data} />;
}
