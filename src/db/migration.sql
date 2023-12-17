DROP TABLE IF EXISTS games;

CREATE TABLE games (
    game_id SERIAL PRIMARY KEY NOT NULL,
    date DATE,
    pgn VARCHAR,
    fen JSON,
    winner VARCHAR(5)
);