import { withAuth } from "../../src/components/commons/hofs/withAuth";

function MyPage() {
  return (
    <>
      <div>마이페이지</div>
    </>
  );
}

export default withAuth(MyPage);
