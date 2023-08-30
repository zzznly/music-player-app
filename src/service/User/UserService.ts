import Service from "@service/Service";

class UserService extends Service {
  getUsersTopItems(params: UserTopItemsReq) {
    return this.service.get<any>(`/me/top/${params.type}`);
  }
}

export default new UserService();
