import Service from "../Service";

class CategoryService extends Service {
  getCategories() {
    return this.service.get<CategoriesRes>("/browse/categories");
  }

  getCategoryPlaylist({ category_id }: CategoryPlaylistReq) {
    return this.service.get(`/browse/categories/${category_id}/playlists`);
  }
}

export default new CategoryService();
