import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation typeSetting(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation typeSetting(
    $password: String
    $boardCommentId: ID!
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      password: $password
      boardCommentId: $boardCommentId
      updateBoardCommentInput: $updateBoardCommentInput
    ) {
      writer
      contents
      _id
    }
  }
`;
