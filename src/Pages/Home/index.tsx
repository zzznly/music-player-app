// styles
import "./style.scss";

// react-query
import {
  useCategories,
  useCategoryPlaylists,
} from "../../service/Category/useCategory";

// components
import ListSection from "../../components/organisms/ListSection";
import { useEffect, useState } from "react";

const Section = ({ id, name }: CategoriesItem) => {
  const { data: { playlists: { href, items } } = {} } = useCategoryPlaylists({
    category_id: id,
  });
  return (
    <ListSection
      title={name}
      // TODO: 타이핑
      data={items.map(({ id, images, name, description }: any) => ({
        id,
        imageUrl: images[0].url,
        title: name,
        description,
      }))}
    />
  );
};

export default function Home(): JSX.Element {
  const { data: { categories: { items = [] } = {} } = {} } = useCategories();

  // const [categories, setCategories] = useState<CategoriesItem[]>([]);

  // // 카테고리 목록 fetch
  // useCategories({
  //   onSuccess: ({ data }) => {
  //     setCategories(data?.categories.items);
  //   },
  // });

  // ** 카테고리 목록데이터 map 돌려서 useCategoryPlaylist() 여러번 호출해야되는데...??
  // const { data } = useCategoryPlaylists({ category_id: categories[0].id });
  // console.log(data);

  return (
    <div className={"wrap"}>
      {items.map((item: CategoriesItem) => (
        <Section key={item.id} {...item} />
      ))}
      {items.map(({ name, id }: { name: string; id: string }) => (
        <div key={id}>
          {name} {id}
        </div>
      ))}
    </div>
  );
}
