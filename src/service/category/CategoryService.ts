import { AxiosResponse } from "axios";
import Service from "../Service";

class CategoryService extends Service {
  getCategories() {
    return this.service.get<CategoriesRes>("/browse/categories");
  }

  getCategoryPlaylist({ category_id }: CategoryPlaylistReq) {
    return this.service.get<CategoryPlaylistRes>(
      `/browse/categories/${category_id}/playlists`
    );
  }

  getGenreSeeds() {
    return this.service.get<any, AxiosResponse<any[]>>(
      "/recommendations/available-genre-seeds"
    );
  }
}

export default new CategoryService();
