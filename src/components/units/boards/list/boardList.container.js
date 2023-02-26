import BoardListUI from "@/src/components/units/boards/list/boardList.presenter";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./boardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  const router = useRouter();

  //   for (let i = 1; i <= 10; i++) {
  //     const num = (i = i + 1);
  //     return num;
  //   }

  const onClickWriteBoard = () => {
    router.push("./boards/new");
  };

  const onClickListTitle = (event) => {
    router.push(`./boards/${event.target.id}`);
  };

  return (
    <>
      <BoardListUI
        data={data}
        onClickWriteBoard={onClickWriteBoard}
        onClickListTitle={onClickListTitle}
      />
    </>
  );
}
