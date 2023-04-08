import instance from "../../utils/axios";

class CategoryPlaylistService {
  async getCategoryPlaylist(params: CategoryPlaylistReq) {
    return await instance.get(
      `/browse/categories/${params.category_id}/playlists`
    );
  }
}

export default new CategoryPlaylistService();
