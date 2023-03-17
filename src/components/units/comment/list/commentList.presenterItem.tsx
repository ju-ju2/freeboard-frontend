import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { GetDate } from "../../../../commons/utils/utils";
import CommentWrite from "../write/commentWrite.container";
import CommentWriteUI from "../write/commentWrite.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";
import * as S from "./commentList.styles";
import { ICommentListUIItemProps } from "./commentList.types";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();

  const [myPassword, setMyPassword] = useState("");
  const [myBoardId, setMyBoardId] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    setIsDeleteModalOpen((prev) => !prev);
  };

  const onClickModify = () => {
    setIsEdit(true);
  };

  const onClickOpenDeleteModal = async (
    event: MouseEvent<HTMLImageElement>
  ) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMyBoardId(event.target.id);
    setIsDeleteModalOpen((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return (
    <S.AllWrapper>
      {isDeleteModalOpen && (
        <Modal title="비밀번호를 입력하세요" open={true} onOk={onClickDelete}>
          <input onChange={onChangePassword} type="password"></input>
        </Modal>
      )}

      {!isEdit && (
        <S.Container>
          <S.CommentWrapper
            // onClick={props.onClickComment}
            id={String(props.el.writer)}
          >
            <S.IconAvatar src="../../img/icon-pageMan.png"></S.IconAvatar>
            <S.CommentAlign>
              <S.WriterStarWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star allowHalf value={props.el.rating} disabled />
                <S.ButtonBox>
                  <S.ModifyButton
                    id={props.el._id}
                    onClick={onClickModify}
                    src="../../img/icon-modify.png"
                  ></S.ModifyButton>
                  <S.DeleteButton
                    id={props.el._id}
                    src="../../img/icon-x.png"
                    onClick={onClickOpenDeleteModal}
                  ></S.DeleteButton>
                </S.ButtonBox>
              </S.WriterStarWrapper>
              <S.Comment>{props.el.contents}</S.Comment>
              <S.Date>{GetDate(props.el.createdAt)}</S.Date>
            </S.CommentAlign>
          </S.CommentWrapper>
        </S.Container>
      )}
      {isEdit && (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </S.AllWrapper>
  );
}
