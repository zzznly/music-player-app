import Service from "../Service";

class CategoryService extends Service {
  getCategories() {
    return this.service.get<CategoriesRes>("browse/categories");
  }
}

export default new CategoryService();
