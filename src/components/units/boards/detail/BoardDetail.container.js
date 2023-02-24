import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FreeBoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function FreeBoardDetail() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    // router.query.boardId의 boardId는 폴더명과 같다. [폴더명: 변수]
  });
  console.log(data);

  return <FreeBoardDetailUI data={data} />;
}
