INSERT INTO channels (code, name, sort_order, created_at)
VALUES ('new', 'Main', 1, datetime('now'))
ON CONFLICT(code) DO UPDATE SET
  name = excluded.name,
  sort_order = excluded.sort_order;
