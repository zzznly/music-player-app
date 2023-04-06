// styles
import "./styles.scss";

// router
import { Outlet, useNavigate } from "react-router-dom";

// hooks
import { useEffect } from "react";

// atoms
import { useAtom } from "jotai";
import { searchKeywordAtom } from "../../logics/atoms/atom";

export default function Search(): JSX.Element {
  // 검색 조건 - 검색어, 검색 타입
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

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
