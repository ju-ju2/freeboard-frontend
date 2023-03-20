import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation typeSetting($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation typeSetting(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation typeSetting($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
