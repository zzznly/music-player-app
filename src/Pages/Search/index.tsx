// styles
import "./styles.scss";

// router
import { Outlet, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { searchKeywordAtom } from "@service/Search/SearchAtom";

export default function Search(): JSX.Element {
  const searchKeyword = useAtomValue(searchKeywordAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}/all`);
    }
  }, [searchKeyword]);

  return (
    <div className={"wrap"}>
      <Outlet />
    </div>
  );
}
