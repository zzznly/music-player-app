import instance from "../../utils/axios";

class SearchService {
  async getSearchResult(params: SearchReq) {
    return await instance.get("search", {
      params,
    });
  }
}
export default new SearchService();
