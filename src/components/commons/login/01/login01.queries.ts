import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation typeSetting($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation typeSetting($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;
