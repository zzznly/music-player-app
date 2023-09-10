import { useAtom } from "jotai";
import { searchKeywordAtom } from "@service/Search/SearchAtom";

export const useSearch = () => {
  const [keyword, setKeyword] = useAtom(searchKeywordAtom);
  return {
    keyword,
    setKeyword,
  };
};
