import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation typeSetting($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
