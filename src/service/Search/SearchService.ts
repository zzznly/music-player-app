import Service from "../Service";
class SearchService extends Service {
  async getSearchResult(params: SearchReq) {
    return await this.service.get("search", {
      params,
    });
  }
}
export default new SearchService();
