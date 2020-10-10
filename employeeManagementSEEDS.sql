
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

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ("Lorem", "Ipsum", 1, NULL),
  ("Dolor", "Amet", 3, NULL),
  ("Consectetur", "Sed", 6, NULL),
  ("Eiusmod", "Tempor", 5, NULL),
  ("Incididunt", "Labore", 2, 1),
  ("Finibus", "Bonorum", 4, 3),
  ("Malorum", "Voluptatem", 7, 6);
