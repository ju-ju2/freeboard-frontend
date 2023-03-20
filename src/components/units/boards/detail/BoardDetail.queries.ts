import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      images
    }
  }
`;

export const LIKE_BOARD = gql`
  mutation typeSetting($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation typeSetting($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
