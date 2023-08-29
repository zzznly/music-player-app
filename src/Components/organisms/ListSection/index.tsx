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
      <ul className={"section-wrap"}>
        <div className="list">
          <div className={"list__title"}>
            <h2>{title}</h2>
            {hasShowMore && (
              <a className={"list__link--more"} href="/">
                See All
              </a>
            )}
          </div>

          <div className="list__content">
            {data.slice(0, 6).map(item => (
              <ListItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
}
