// styles
import "./style.scss";

// react-query
import {
  useCategories,
  useCategoryPlaylists,
} from "../../service/Category/useCategory";

// components
import ListSection from "../../components/organisms/ListSection";

const Section = ({ id, name = "" }: CategoriesItem): JSX.Element => {
  const { data: { playlists: { items = [] } = {} } = {} } =
    useCategoryPlaylists(
      {
        category_id: id,
      },
      {
        enabled: !!id,
      }
    );

  return (
    <ListSection
      title={name}
      data={items.map(
        // Q: 데이터 가공 안하고 쓰면 왜 이미지가 안나오지?
        ({ id, images, name, type, description }: CategoryPlaylistItem) => ({
          id,
          imageUrl: images[0].url,
          title: name,
          description,
          type,
        })
      )}
      hasShowMore={true}
    />
  );
};

export default function Home(): JSX.Element {
  const { data: { categories: { items = [] } = {} } = {} } = useCategories();
  return (
    <div className={"wrap"}>
      <div className="playlist">
        <h2 className="playlist__title">Explore</h2>
        <div className="playlist__content">
          {items.map((item: CategoriesItem) => (
            <Section key={item.id} {...item} />
          ))}
        </div>
        {/* <div className="playlist__container"></div> */}
      </div>
    </div>
  );
}
