DROP TABLE IF EXISTS saved_locations CASCADE;

CREATE TABLE saved_locations (
  arena_uuid VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  PRIMARY KEY (arena_uuid, user_id)
)