import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query typeSetting($page: Int) {
    fetchUseditems(page: $page) {
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
