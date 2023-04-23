// styles
import "./styles.scss";

// router
import { Outlet, useNavigate } from "react-router-dom";

// hooks
import { useEffect } from "react";

// atoms
import { useAtomValue } from "jotai";
import { searchKeywordAtom } from "../../service/Search/SearchAtom";

export default function Search(): JSX.Element {
  const searchKeyword = useAtomValue(searchKeywordAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
    }
  }, [searchKeyword]);

  return (
    <div className={"wrap"}>
      <Outlet />
    </div>
  );
}
