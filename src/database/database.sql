CREATE DATABASE primerapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('joe','joe@ibm.com'),
    ('simon', 'sipero2013@gmail.com');
