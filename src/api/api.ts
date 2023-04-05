import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import { CategoryPlaylistReq, PlaylistReq, SearchReq } from "../types/request";
import { CategoriesRes } from "../types/categories";
import { PlaylistDetailRes } from "../types/playlist";
import {
  SearchAlbumsRes,
  SearchArtistsRes,
  SearchTracksRes,
} from "../types/search";

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

// ## Playlist
// GET - Playlist Detail
export const getPlaylistDetail = async (
  params: PlaylistReq
): Promise<AxiosResponse<PlaylistDetailRes>> => {
  const res = await axios.get(`playlists/${params.playlist_id}`);
  return res;
};
// GET - Playlist Tracks
export const getPlaylistTracks = async (params: PlaylistReq) => {
  const res = await axios.get(`playlists/${params.playlist_id}/tracks`);
  return res;
};
