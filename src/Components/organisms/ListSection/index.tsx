import { useState } from "react";
import { Props as ItemProps } from "../../molecules/ListItem";
// styles
import "./style.scss";

// react-query
// import { useCategoryPlaylists } from "../../../../../logics/queries/useQueries";

// components
import ListItem from "../../molecules/ListItem";

interface Props {
  title: string;
  data: ItemProps[];
}

export default function ListSection({ title, data }: Props): JSX.Element {
  return (
    <div className={"section"}>
      <div className={"section-head"}>
        <h2 className={"section-head__title"}>{title}</h2>
        <a className={"section-head__link--all"} href="/">
          모두 표시
        </a>
      </div>
      <ul className={"list"}>
        {data.map(item => (
          <ListItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
