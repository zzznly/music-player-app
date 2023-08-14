// styles
import "./style.scss";

// components
import ListItem, { ListItemProps } from "../../molecules/ListItem";

export interface ListSectionProps {
  title: string;
  data: ListItemProps[];
  hasShowMore: boolean;
}

export default function ListSection({
  title,
  data,
  hasShowMore,
}: ListSectionProps): JSX.Element {
  return (
    <div className={"section"}>
      <div className="section-wrap">
        <div className={"section-head"}>
          <h2 className={"section-head__title"}>{title}</h2>
          {/* {hasShowMore && (
          <a className={"section-head__link--all"} href="/">
            모두 표시
          </a>
        )} */}
        </div>
        <ul className={"list"}>
          {data.slice(0, 6).map(item => (
            <ListItem {...item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
