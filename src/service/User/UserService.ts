import Service from "@service/Service";

class UserService extends Service {
  getUsersTopItems(params: UserTopItemsReq) {
    return this.service.get<any>(`/me/top/${params.type}`);
  }

  getUserInfo() {
    return this.service.get<any>("/me");
  }
}

export default new UserService();
