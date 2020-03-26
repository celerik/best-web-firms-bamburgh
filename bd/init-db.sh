#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE best-web-firms;
    CREATE TABLE hello_world (
        id serial PRIMARY KEY,
        name VARCHAR (255) NOT NULL
    );

    INSERT INTO hello_world (name)
    VALUES
    ('Hello World!!');
EOSQL