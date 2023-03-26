import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        _id
        email
        name
      }
      pickedCount
    }
  }
`;
