DROP DATABASE IF EXISTS employee_Management;
CREATE DATABASE employee_Management;

USE employee_Management;

CREATE TABLE department
(
  id INT NOT NULL
  AUTO_INCREMENT,
  name VARCHAR
  (30) NOT NULL,  
  PRIMARY KEY
  (id)
);
  CREATE TABLE role
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  title VARCHAR
    (30) NOT NULL,
  salary DECIMAL
    (10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY
    (id)
);
    CREATE TABLE employee
    (
      id INT NOT NULL
      AUTO_INCREMENT,
  first_name VARCHAR
      (30) NOT NULL,
  last_name VARCHAR
      (30) NOT NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY
      (id)
);


      INSERT INTO department
        (name)
      VALUES
        ("sales"),
        ("engineering"),
        ("finance"),
        ("legal");

      INSERT INTO role
        (title, salary, department_id)
      VALUES
        ("sales lead", 100, 1),
        ("salesperson", 80, 1),
        ("lead engineer", 100, 2),
        ("software engineer", 90, 2),
        ("accountant", 70, 3),
        ("legal team lead", 110, 4),
        ("lawyer", 100, 4);

      INSERT INTO employees
        (first_name, last_name, role_id, manager_id)
      VALUES
        ("Lorem", "Ipsum", 1, NULL),
        ("Dolor", "Amet", 3, NULL),
        ("Consectetur", "Sed", 6, NULL),
        ("Eiusmod", "Tempor", 5, NULL),
        ("Incididunt", "Labore", 2, 1),
        ("Finibus", "Bonorum", 4, 3),
        ("Malorum", "Voluptatem", 7, 6)

      SELECT *
      FROM employee;
      SELECT *
      FROM role;
      SELECT *
      FROM department;