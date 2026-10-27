export type InstagramAccount = {
  username: string;
  name: string;
  avatar: string;
  profile: string;
  posts: { url: string; thumbnail?: string; alt?: string }[];
};
export default function InstagramPhone({
  account,
}: {
  account: InstagramAccount;
}) {
  return (
    <div className="phone-feature">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="island" />
            <span aria-label="Battery full">▰</span>
          </div>
          <div
            className="phone-scroll"
            tabIndex={0}
            role="region"
            aria-label={`${account.name} Instagram portfolio preview`}
          >
            <div className="ig-top">
              <a
                href={account.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{account.username} ↗
              </a>
              <span>◎</span>
            </div>
            <div className="ig-profile">
              <img
                src={`/assets/${account.avatar}`}
                alt={`${account.name} profile logo`}
                width="80"
                height="80"
              />
              <div>
                <strong>{account.name}</strong>
                <p>Health Club · Palestine</p>
              </div>
            </div>
            <p className="ig-description">Explore the club’s selected posts.</p>
            <a
              className="ig-profile-link"
              href={account.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Instagram profile ↗
            </a>
            <div className="ig-grid-label">
              ⊞ <span>SELECTED POSTS</span>
            </div>
            <div className="ig-grid">
              {account.posts.map((post, i) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${account.name} Instagram post ${i + 1} in a new tab`}
                  className="ig-tile"
                >
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.alt || `Verified post ${i + 1}`}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span className="tile-arrow">↗</span>
                      <img
                        src={`/assets/${account.avatar}`}
                        alt=""
                        width="72"
                        height="72"
                      />
                      <span className="tile-label">POST / 0{i + 1}</span>
                    </>
                  )}
                </a>
              ))}
            </div>
            <p className="ig-disclosure">
              Branded link previews.
              <br />
              Original posts open on Instagram.
            </p>
          </div>
          <div className="phone-home" />
        </div>
      </div>
      <p className="phone-caption">
        An interactive profile preview.
        <br />
        Branded fallback tiles; no live feed or engagement data.
      </p>
    </div>
  );
}
