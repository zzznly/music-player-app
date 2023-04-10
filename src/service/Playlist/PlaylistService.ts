import Service from "../Service";

class PlaylistService extends Service {
  getPlaylistDetail(params: PlaylistReq) {
    return this.service.get(`playlists/${params.playlist_id}`);
  }
}

export default new PlaylistService();
