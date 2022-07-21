DROP TABLE IF EXISTS saved_locations CASCADE;

CREATE TABLE saved_locations (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  sport VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
)