// styles
import "./style.scss";

// components
import ListItem, { ListItemProps } from "../../molecules/ListItem";

export interface ListSectionProps {
  title: string;
  data: ListItemProps[];
  hasShowMore?: boolean;
  className?: string;
}

// interface ListItemProps {
//   id?: string;
//   imageUrl?: string;
//   title?: string;
//   name ? : string;
//   description?: string;
//   uri?: string;
// }

export default function ListSection({
  title,
  data,
  hasShowMore = false,
  className,
}: ListSectionProps): JSX.Element {
  return (
    <div className={`section ${className || ""}`}>
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
            {data.map(item => {
              const { name = "", title = "", ...rest } = item;
              return <ListItem {...rest} name={title || name} key={item.id} />;
            })}
          </div>
        </div>
      </ul>
    </div>
  );
}
