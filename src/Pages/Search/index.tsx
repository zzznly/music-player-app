// styles
import "./styles.scss";

// router
import { Outlet, useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { searchKeywordAtom } from "@service/Search/SearchAtom";

export default function Search(): JSX.Element {
  const [searchKeyword, setKeyword] = useAtom(searchKeywordAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
    }
  }, [searchKeyword]);

  useEffect(() => {
    return () => {
      setKeyword("");
    };
  }, []);

  return (
    <div className={"wrap"}>
      <Outlet />
    </div>
  );
}
