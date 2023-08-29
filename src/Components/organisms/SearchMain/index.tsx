import { useState } from "react";

// styles
import "./style.scss";

// react-query
import { useCategories } from "../../../service/Category/useCategory";

// types
import { CategoriesItem } from "../../../types/categories";

// router
import { Link } from "react-router-dom";

interface CategoriesItemColored extends CategoriesItem {
  bgColor: string;
}

export default function SearchMain(): JSX.Element {
  const bgColors: string[] = [
    "rgb(225, 51, 0)",
    "rgb(115, 88, 255)",
    "rgb(30, 50, 100)",
    "rgb(232, 17, 91)",
    "rgb(45, 70, 185)",
    "rgb(20, 138, 8)",
    "rgb(188, 89, 0)",
    "rgb(220, 20, 140)",
    "rgb(141, 103, 171)",
    "rgb(119, 119, 119)",
    "rgb(255, 0, 144)",
    "rgb(5, 105, 82)",
    "rgb(225, 51, 0)",
    "rgb(115, 88, 255)",
    "rgb(30, 50, 100)",
    "rgb(232, 17, 91)",
    "rgb(45, 70, 185)",
    "rgb(20, 138, 8)",
    "rgb(188, 89, 0)",
    "rgb(220, 20, 140)",
  ];

  const { data: { categories: { items = [] } = {} } = {} } = useCategories();

  // **Question: select가 안먹어요!
  // {
  // onSuccess: () => {
  // items = items.map((v: CategoriesItemColored, idx: number) => {
  //   return { ...v, bgColor: bgColors[idx] };
  // });
  // },
  // select: data =>
  //   data.categories.items.map((v: CategoriesItemColored, idx: number) => {
  //     return { ...v, bgColor: bgColors[idx] };
  //   }),
  // }

  return (
    <div className="search-main">
      <div className="search-main__title">
        <h2>Search</h2>
      </div>
      <div className="search-main__content">
        {items &&
          items
            .map((v: CategoriesItemColored, idx: number) => {
              return { ...v, bgColor: bgColors[idx] };
            })
            .map((item: CategoriesItemColored) => (
              <Link
                className="search-main__item"
                key={item.id}
                to={`/playlist/detail?category_id=${item.id}`}
                style={{ background: `${item.bgColor}` }}
              >
                <div className="search-main__item-wrap">
                  <p className="search-main__item-label">{item.name}</p>
                  <img
                    className="search-main__item-image"
                    src={item.icons[0].url}
                    alt={item.name}
                  />
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
