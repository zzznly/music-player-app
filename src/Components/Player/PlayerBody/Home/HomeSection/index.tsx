import ListItem from "../../../../ListItem";

interface Props {
  title: string;
  data: {
    items: any[];
  };
}
export default function HomeSection({ title, data }: Props) {
  return (
    <div className={"section"}>
      <div className={"section-head"}>
        <h2 className={"section-head__title"}>{title}</h2>
        <a className={"section-head__link--all"} href="/">
          모두 표시
        </a>
      </div>
      <ul className={"list"}>
        {data.items.map(item => (
          <ListItem
            title={item.name}
            description={item.description}
            imageUrl={item.images[0].url}
          />
        ))}
      </ul>
    </div>
  );
}
