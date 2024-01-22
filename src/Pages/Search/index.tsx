// styles
import "./styles.scss";

// components
import SearchMain from "../../_Components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "../../_Components/Player/PlayerBody/Search/SearchResult";

// atoms
import { useAtomValue } from "jotai";
import { searchKeywordAtom } from "../../logics/atoms/atom";

export default function Search(): JSX.Element {
  const searchKeyword = useAtomValue(searchKeywordAtom);

  return (
    <div className={"wrap"}>
      {searchKeyword ? <SearchResult /> : <SearchMain />}
    </div>
  );
}
