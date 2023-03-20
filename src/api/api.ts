import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import { SearchReq } from "../types/request";
import { CategoriesRes } from "../types/response";

export const getCategories = async (): Promise<
  AxiosResponse<CategoriesRes>
> => {
  const res = await axios.get("browse/categories");
  return res;
};

export const getSearchResult = async (params: SearchReq) => {
  const res = await axios.get("/search", {
    params,
  });
  return res;
};
