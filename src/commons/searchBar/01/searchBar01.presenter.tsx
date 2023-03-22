import {
  IconSearch,
  SearchTitle,
  SearchTitleInput,
} from "./searchBar01.styles";
import { ISearchBar01UIProps } from "./searchBar01.types";

export default function SearchBar01UI(props: ISearchBar01UIProps) {
  return (
    <>
      <SearchTitle>
        <IconSearch src="../../img/icon-search.png"></IconSearch>
        <SearchTitleInput
          onChange={props.onChangeSearch}
          placeholder="제목을 검색해주세요"
        ></SearchTitleInput>
      </SearchTitle>
    </>
  );
}
