CREATE TABLE IF NOT EXISTS breweries (
  serial  SERIAL,
  name    VARCHAR(255),
  city    VARCHAR(255),
  state   VARCHAR(3),
  id      INTEGER PRIMARY KEY
);
GRANT SELECT ON breweries TO anon;

CREATE TABLE IF NOT EXISTS beers (
  serial      SERIAL,
  abv         NUMERIC,
  ibu         NUMERIC,
  id          INTEGER PRIMARY KEY,
  name        VARCHAR(255),
  style       VARCHAR(255),
  brewery_id  INTEGER REFERENCES breweries(id),
  ounces      NUMERIC
);
GRANT SELECT ON beers TO anon;

\COPY breweries(serial, name, city, state, id) FROM 'datasets/craft_beers/breweries.csv' DELIMITER ',' CSV HEADER;
\COPY beers(serial, abv, ibu, id, name, style, brewery_id, ounces) FROM 'datasets/craft_beers/beers.csv' DELIMITER ',' CSV HEADER;
