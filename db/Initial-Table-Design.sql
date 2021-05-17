DROP DATABASE IF EXISTS taskmaster_db;
-- Creates the "taskmaster_db" database --
CREATE DATABASE taskmaster_db;

-- Makes it so all of the following code will affect taskmaster_db --
USE taskmaster_db;

-- Creates the table "students" within taskmaster_db --
CREATE TABLE students (
  
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(70) NOT NULL,
  project_id INTEGER,
  task_id INTEGER
);

CREATE TABLE projects (

	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    projectname VARCHAR(70),
    projectdesc VARCHAR(255)
);

CREATE TABLE tasks (

id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
taskname VARCHAR(100),
status VARCHAR(25),
project_id INTEGER,
user_id INTEGER

);

