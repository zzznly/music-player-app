import HomeSection from "../../components/Player/PlayerBody/Home/HomeSection";

import "./style.scss";
export default function Home(): JSX.Element {
  // Get Current User's Playlists GET /me/playlist
  const data1 = {
    href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    limit: 20,
    next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    offset: 0,
    previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    total: 4,
    items: [
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 1",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
    ],
  };
  // Get Featured Playlists GET /browse/featured-playlists
  const data2 = {
    href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    limit: 20,
    next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    offset: 0,
    previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    total: 4,
    items: [
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 1",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
      {
        collaborative: true,
        description: "Cosmic Boy, Supreme Team 및 DPR LIVE",
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f824c973de698b722df271d",
            height: 300,
            width: 300,
          },
        ],
        name: "데일리 믹스 2",
        owner: {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          href: "string",
          id: "string",
          type: "user",
          uri: "string",
          display_name: "string",
        },
        public: true,
        snapshot_id: "string",
        tracks: {
          href: "string",
          total: 0,
        },
        type: "string",
        uri: "string",
      },
    ],
  };

  return (
    <div className={"wrap"}>
      <HomeSection title={"K-Hip Hop"} data={data1} />
      <HomeSection title={"R&B"} data={data2} />
      <HomeSection title={"더 많은 추천곡"} data={data1} />
    </div>
  );
}
