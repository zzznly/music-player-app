import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import { SearchReq } from "../types/request";
import { CategoriesRes, SearchTracksRes } from "../types/response";

export const getCategories = async (): Promise<
  AxiosResponse<CategoriesRes>
> => {
  const res = await axios.get("browse/categories");
  return res;
};

export const getSearchResult = async (
  params: SearchReq
): Promise<AxiosResponse<SearchTracksRes | any>> => {
  const res = await axios.get("/search", {
    params,
  });
  return res;
};
