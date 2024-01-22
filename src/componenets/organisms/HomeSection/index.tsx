import { useCategoryPlaylists } from "@service/_category/useCategory";
import ListSection from "../ListSection";

export const HomeSection = ({ id, name = "" }: CategoriesItem) => {
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
    <>
      <ListSection
        title={name}
        data={items.map(
          ({ id, name, description, uri, images }: CategoryPlaylistItem) => ({
            id,
            name,
            description,
            uri,
            imageUrl: images[0].url,
          })
        )}
        hasShowMore={false}
      />
    </>
  );
};
