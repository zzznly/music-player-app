// styles
import "./style.scss";

// constants
import { CATEGORY } from "@constants/searchCategory";

// routes
import { Link, Outlet, useParams } from "react-router-dom";

// components
import { useSearchResult } from "@service/Search/useSearchResult";

export default function SearchResult(): JSX.Element {
  const params = useParams();

  const searchParams: SearchReq = {
    q: params.keyword ?? "",
    type: (
      Object.values(CATEGORY).find(({ path }) => path === params.category) ??
      CATEGORY.ALL
    ).params,
  };

  const { data } = useSearchResult(searchParams, {
    enabled: !!params.keyword,
  });

  return (
    <div className={"search-result"}>
      <div className={"search-result__filter"}>
        {Object.entries(CATEGORY).map(([key, { path, label }]) => (
          <Link
            key={key}
            to={`/search/${params.keyword}${path && `/${path}`}`}
            className={`search-result__filter-link ${
              (params.category ?? "") === path && `is-active`
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="search-result__content">
        {data ? <Outlet context={data} /> : <>no data</>}
      </div>
    </div>
  );
}
