import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import { CategoryPlaylistReq, SearchReq } from "../types/request";
import {
  CategoriesRes,
  SearchAlbumsRes,
  SearchArtistsRes,
  SearchTracksRes,
} from "../types/response";

// ## Search
// GET - Search Result
export const getSearchResult = async (
  params: SearchReq
): Promise<
  AxiosResponse<SearchTracksRes | SearchAlbumsRes | SearchArtistsRes>
> => {
  const res = await axios.get("/search", {
    params,
  });
  return res;
};

export const getFeaturedPlaylists = async (): Promise<AxiosResponse<any>> => {
  const res = await axios.get("/browse/featured-playlists");
  return res;
};

// ## Categories
// GET - Categories
export const getCategories = async (): Promise<
  AxiosResponse<CategoriesRes>
> => {
  const res = await axios.get("browse/categories");
  return res;
};
// GET - Category's Playlists
export const getCategoryPlaylist = async (
  params: CategoryPlaylistReq
): Promise<AxiosResponse<any>> => {
  const res = await axios.get(
    `/browse/categories/${params.category_id}/playlists`
  );
  return res;
};

// ## Artists
// GET - Artist albums
export const getArtist = async () => {
  const res = await axios.get(`artists/${"0Y2AcMPMpeuPXtPQGVvRBq"}/albums`, {
    params: {
      country: "KR",
    },
  });
  return res;
};

export const getPlaylistTracks = async () => {
  const res = await axios.get(`playlists/${"37i9dQZF1DXcBWIGoYBM5M"}/tracks`);
  return res;
};
