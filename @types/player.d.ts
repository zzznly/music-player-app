interface StartPlaybackReq {
  context_uri?: string;
  offset?: {
    position: Number;
  };
  uris: string[];
  position_ms?: Number;
}

interface PlayerProps {
  current_track: any;
  current_position: any;
  is_paused: boolean;
}
