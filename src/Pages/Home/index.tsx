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
      <div className={"section"}>
        <div className={"section-head"}>
          <h2 className={"section-head__title"}>K-Hip Hop</h2>
          <a className={"section-head__link--all"} href="/">
            모두 표시
          </a>
        </div>
        <ul className={"list"}>
          {data1.items.map(item => (
            <li className={"list-item"}>
              <a className={"list-item__link"} href="/">
                <div className={"list-item__album"}>
                  <img
                    src={item.images[0].url}
                    className={"list-item__image"}
                    alt="album"
                  />
                  <button
                    className="list-item__button--play"
                    aria-hidden="true"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </button>
                </div>
                <p className={"list-item__title"}>{item.name}</p>
                <p className={"list-item__artists"}>{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={"section type02"}>
        <div className={"section-head"}>
          <h2 className={"section-head__title"}>R&B</h2>
          <a className={"section-head__link--all"} href="/">
            모두 표시
          </a>
        </div>
        <ul className={"list"}>
          {data2.items.map(item => (
            <li className={"list-item"}>
              <a className={"list-item__link"} href="/">
                <div className={"list-item__album"}>
                  <img
                    src={item.images[0].url}
                    className={"list-item__image"}
                    alt="album"
                  />
                  <button
                    className="list-item__button--play"
                    aria-hidden="true"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </button>
                </div>
                <p className={"list-item__title"}>{item.name}</p>
                <p className={"list-item__artists"}>{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={"section type02"}>
        <div className={"section-head"}>
          <h2 className={"section-head__title"}>더 많은 추천곡</h2>
          <a className={"section-head__link--all"} href="/">
            모두 표시
          </a>
        </div>
        <ul className={"list"}>
          {data1.items.map(item => (
            <li className={"list-item"}>
              <a className={"list-item__link"} href="/">
                <div className={"list-item__album"}>
                  <img
                    src={item.images[0].url}
                    className={"list-item__image"}
                    alt="album"
                  />
                  <button
                    className="list-item__button--play"
                    aria-hidden="true"
                  >
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </button>
                </div>
                <p className={"list-item__title"}>{item.name}</p>
                <p className={"list-item__artists"}>{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
