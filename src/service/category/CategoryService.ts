import instance from "../../utils/axios";
// import Service from "../Service";

// class CategoryService extends Service {
//   getCategories() {
//     return this.service.get<CategoriesRes>("browse/categories");
//   }
// }
class CategoryService {
  async getCategories() {
    return await instance.get("browse/categories");
  }
}

export default new CategoryService();
