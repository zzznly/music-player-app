import { useState } from "react";

// react-query
import { useCategoryPlaylists } from "../../../../../logics/queries/useQueries";

// components
import ListItem from "../../../../ListItem";

// styles
import "./style.scss";

interface Props {
  title: string;
  id: string;
}

export default function HomeSection({ title, id }: Props): JSX.Element {
  const [categoryPlaylists, setCategoryPlaylists] = useState<any[]>([]);

  useCategoryPlaylists(
    { category_id: id },
    {
      onSuccess: ({ data }) => {
        setCategoryPlaylists(data?.playlists.items);
      },
    }
  );

  return (
    <div className={"section"}>
      <div className={"section-head"}>
        <h2 className={"section-head__title"}>{title}</h2>
        <a className={"section-head__link--all"} href="/">
          모두 표시
        </a>
      </div>
      <ul className={"list"}>
        {categoryPlaylists.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
