import { AxiosResponse } from "axios";
import Service from "../Service";

class PlaylistService extends Service {
  getPlaylistDetail(params: PlaylistReq) {
    return this.service.get(`playlists/${params.playlist_id}`);
  }

  getNewReleases() {
    return this.service.get<NewReleaseRes>("/browse/new-releases");
  }
}

export default new PlaylistService();
