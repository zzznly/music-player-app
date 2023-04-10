// styles
import "./style.scss";

// components
import ListItem, { ListItemProps } from "../../molecules/ListItem";

export interface ListSectionProps {
  title: string;
  data: ListItemProps[];
}

export default function ListSection({
  title,
  data,
}: ListSectionProps): JSX.Element {
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
