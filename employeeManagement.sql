DROP DATABASE IF EXISTS employeeManagement_DB;
CREATE DATABASE employeeManagement_DB;

USE employeeManagement_DB;

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
    (10 , 2 ) NULL, 
    department_id INT NULL,   
    PRIMARY KEY
    (id),
    FOREIGN KEY
    (department_id) REFERENCES department
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
      title_id INT NULL,
      manager_id INT NULL,       
    PRIMARY KEY
      (id),
      FOREIGN KEY
      (title_id) REFERENCES role
      (id),
      FOREIGN KEY
      (manager_id) REFERENCES employee
      (id)
);


      SELECT
        *
      FROM
        employee;
      SELECT
        *
      FROM
        role;
      SELECT
        *
      FROM
        department;