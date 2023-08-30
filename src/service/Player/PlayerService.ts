import Service from "@service/Service";

class PlayerService extends Service {
  // get playback state - user’s current playback state (track, episode, progress, active device)
  getPlaybackState() {
    return this.service.get("/me/player");
  }

  // start/resume
  startPlayback(device_id: string, uri: string | undefined) {
    return this.service
      .put(
        `/me/player/play?device_id=${device_id}`,
        uri?.split(":")[1] === "track"
          ? {
              uris: [uri],
            }
          : {
              context_uri: uri,
            }
      )
      .then(res => {
        console.log("play", res);
      })
      .catch(err => console.log("play err", err));
  }

  // pause
  pausePlayback(device_id: string) {
    return this.service
      .put(`/me/player/pause?device_id=${device_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  // skip next
  skipNextTrack(device_id: string) {
    return this.service.post(`/me/player/next?device_id=${device_id}`);
  }

  // skip previous
  skipPreviousTrack(device_id: string) {
    return this.service.post(`/me/player/previous?device_id=${device_id}`);
  }

  // currently playing track
  getCurrentPlayingTrack() {
    return this.service.get("/me/player/currently-playing");
  }

  // seek to position
  seekPosition(position_ms: number, device_id: string) {
    return this.service.put(
      `/me/player/seek?position_ms=${position_ms}&device_id=${device_id}`
    );
  }

  // set repeat mode
  setRepeat(state: string, device_id: string) {
    return this.service.put(
      `/me/player/repeat?state=${state}&device_id=${device_id}`
    );
  }

  // set playback volume
  setVolume(volume_percent: number, device_id: string) {
    return this.service.put(
      `/me/player/volume?volume_percent=${volume_percent}&device_id=${device_id}`
    );
  }

  // toggle playback shuffle
  toggleShuffle(state: boolean, device_id: string) {
    return this.service.put(
      `/me/player/shuffle?state=${state}&device_id=${device_id}`
    );
  }

  // add track to current playlist (queue)
  addToPlaybackList(device_id: string, uri: string | undefined) {
    return this.service.post(
      `/me/player/queue?uri=${uri}&device_id=${device_id}`
    );
  }

  // get user's current playlist (queue)
  getPlaybackList() {
    return this.service.get("/me/player/queue");
  }
}

export default new PlayerService();
