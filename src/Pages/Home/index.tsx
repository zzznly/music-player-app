import { useEffect, useState } from "react";

// react-query
import { useCategories } from "../../service/Category/useCategory";

// components
import ListSection from "../../components/Player/PlayerBody/Home/ListSection";

// styles
import "./style.scss";

export default function Home(): JSX.Element {
  const { data } = useCategories();
  return (
    <div className={"wrap"}>
      {data?.data.categories.items.map((item: CategoriesItem, idx: number) => (
        <ListSection title={item.name} id={item.id} key={idx} />
      ))}
    </div>
  );
}
