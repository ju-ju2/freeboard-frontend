// import FreeBoardWrite from "@/src/components/units/boards/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FreeBoardWrite from "../../../../src/components/units/boards/write/BoardWrite.container";

export const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

//현재 보드에 패치보드해서 등록된 게시물을 디폴트벨루값으로 보여줘야한다
export default function UploadPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <FreeBoardWrite isEdit={true} data={data} />;
}
