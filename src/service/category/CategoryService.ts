import Service from "../Service";

class CategoryService extends Service {
  getCategories() {
    return this.service.get<CategoriesRes2>("browse/categories");
  }
}

export default new CategoryService();
