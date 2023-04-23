import Service from "../Service";
class SearchService extends Service {
  async getSearchResult(params: SearchReq) {
    return await this.service.get<SearchRes>("search", {
      params,
    });
  }
}
export default new SearchService();
