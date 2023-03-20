import { useState } from "react";

// styles
import "./styles.scss";

// components
import SearchMain from "../../components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "../../components/Player/PlayerBody/Search/SearchResult";

// atoms
import { useAtomValue } from "jotai";
import { searchKeywordAtom } from "../../logics/atoms/atom";

export default function Search() {
  const searchKeyword = useAtomValue(searchKeywordAtom);

  // getCategories();

  return (
    <div className={"wrap"}>
      {searchKeyword ? <SearchResult /> : <SearchMain />}
    </div>
  );
}
