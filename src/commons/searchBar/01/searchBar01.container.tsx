import SearchBar01UI from "./searchBar01.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";
import { ISearchBar01Props } from "./searchBar01.types";

export default function SearchBar01(props: ISearchBar01Props) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.dataBoardsRefetch({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <SearchBar01UI onChangeSearch={onChangeSearch} />
    </>
  );
}
