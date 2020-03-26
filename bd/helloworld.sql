CREATE TABLE hello_world (
   id serial PRIMARY KEY,
   name VARCHAR (255) NOT NULL
);

INSERT INTO hello_world (name)
VALUES
 ('Hello World!!')