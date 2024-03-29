import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query typeSetting($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation typeSetting($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;
