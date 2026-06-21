-- 共有楽曲リクエストテーブル
-- リスナーが自由に追加できるリクエストを蓄積し、サイト上で共有する

CREATE TABLE IF NOT EXISTS song_requests (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  title          TEXT    NOT NULL,
  artist         TEXT    NOT NULL DEFAULT '',
  note           TEXT,
  requester_name TEXT,
  status         TEXT    NOT NULL DEFAULT 'unregistered', -- singable | practicing | unregistered
  vote_count     INTEGER NOT NULL DEFAULT 1 CHECK (vote_count >= 0),
  created_at     TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_song_requests_public
  ON song_requests (vote_count DESC, created_at DESC);
