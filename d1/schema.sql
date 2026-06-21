PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS channels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  normalized_name TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  normalized_title TEXT NOT NULL,
  artist_id INTEGER,
  song_key TEXT NOT NULL UNIQUE,
  display_key TEXT NOT NULL DEFAULT '',
  genre TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_songs_normalized_title ON songs(normalized_title);
CREATE INDEX IF NOT EXISTS idx_songs_artist_id ON songs(artist_id);

CREATE TABLE IF NOT EXISTS streams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  channel_id INTEGER NOT NULL,
  source_index INTEGER,
  streamed_on TEXT NOT NULL,
  title TEXT,
  url TEXT,
  url_key TEXT NOT NULL,
  song_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY (channel_id) REFERENCES channels(id) ON DELETE CASCADE,
  UNIQUE(channel_id, streamed_on, url_key)
);

CREATE INDEX IF NOT EXISTS idx_streams_channel_date ON streams(channel_id, streamed_on DESC);

CREATE TABLE IF NOT EXISTS stream_songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  stream_id INTEGER NOT NULL,
  song_id INTEGER,
  position INTEGER NOT NULL,
  raw_text TEXT,
  title_snapshot TEXT NOT NULL,
  artist_snapshot TEXT,
  song_key_snapshot TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (stream_id) REFERENCES streams(id) ON DELETE CASCADE,
  FOREIGN KEY (song_id) REFERENCES songs(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_stream_songs_stream_position ON stream_songs(stream_id, position);
CREATE INDEX IF NOT EXISTS idx_stream_songs_song_id ON stream_songs(song_id);

CREATE TABLE IF NOT EXISTS song_channel_stats (
  song_id INTEGER NOT NULL,
  channel_id INTEGER NOT NULL,
  sing_count INTEGER NOT NULL DEFAULT 0 CHECK (sing_count >= 0),
  source_index INTEGER,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (song_id, channel_id),
  FOREIGN KEY (song_id) REFERENCES songs(id) ON DELETE CASCADE,
  FOREIGN KEY (channel_id) REFERENCES channels(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_song_channel_stats_channel ON song_channel_stats(channel_id, song_id);

CREATE TABLE IF NOT EXISTS community_timestamps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  channel_code TEXT NOT NULL,
  stream_index INTEGER NOT NULL,
  song_index INTEGER NOT NULL,
  time_seconds INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  submitter_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT,
  reviewer_note TEXT
);

CREATE INDEX IF NOT EXISTS idx_ct_lookup ON community_timestamps(channel_code, stream_index, status);
CREATE INDEX IF NOT EXISTS idx_ct_status_created ON community_timestamps(status, created_at DESC);

CREATE TABLE IF NOT EXISTS song_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  artist TEXT NOT NULL DEFAULT '',
  note TEXT,
  requester_name TEXT,
  status TEXT NOT NULL DEFAULT 'unregistered',
  vote_count INTEGER NOT NULL DEFAULT 1 CHECK (vote_count >= 0),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_song_requests_public
  ON song_requests(vote_count DESC, created_at DESC);
