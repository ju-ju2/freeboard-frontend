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

export const UPDATE_BOARD_COMMENT = gql`
mutation typeSetting($password: String, $boardCommentId: ID!, $updateBoardCommentInput: UpdateBoardCommentInput!){
  updateBoardComment(password: $password, boardCommentId: $boardCommentId, updateBoardCommentInput: $updateBoardCommentInput)(
    # password:"1234" 
    # boardCommentId:"641315bc1182750028ee7cbc"
    # updateBoardCommentInput: {
    #   contents: "댓글업데이트 성공!"
    #   rating: 3
    # }
  ){
    writer
    contents
    _id
  }
}
`;
