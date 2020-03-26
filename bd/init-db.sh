#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE best-web-firms;
    CREATE TABLE dashboard (
        id serial PRIMARY KEY,
        content VARCHAR NOT NULL
    );
 
    INSERT INTO dashboard (content)
    VALUES
    ('Hello World!!');
EOSQL