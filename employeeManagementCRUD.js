const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Below is randomly generated code. Purpose?
// const { start } = require("repl");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employeeManagement_DB"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startApp();
});

const startApp = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add department",
        "Add roles",
        "Add employees",
        "View departments",
        "View roles",
        "View employees",
        "Update employees",
        "Exit"
      ]
    })
    .then(answer => {
      switch (answer.action) {
        case "Add department":
          departmentAdd();
          break;

        case "Add roles":
          roleAdd();
          break;

        case "Add employees":
          employeeAdd();
          break;

        case "View departments":
          departmentView();
          break;

        case "View roles":
          roleView();
          break;

        case "View employees":
          employeeView();
          break;

        case "Update employees":
          employeeUpdate();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}

const departmentAdd = () => {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is the name of the department you would like to create?"
    }
  ]).then(answer => {
    let promptAns = { name: answer.name }
    let query = "INSERT INTO department SET ?";

    connection.query(query, promptAns, function (err) {
      if (err) throw err;
      console.log("Department Added Successfully")
      startApp();
    }
    );
  });
};

const roleAdd = () => {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title of the role you would like to create?"
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary of the role you would like to create?"
      // validate isNaN
    },
    {
      name: "department_id",
      type: "list",
      message: "Which department does the role you would like to create belong to?",
      choices: [
        "sales",
        "engineering",
        "finance",
        "legal"
      ]
    }
  ]).then(answer => {
    let promptAns = { title: answer.title, salary: answer.salary, department_id: answer.department }
    let query = "INSERT INTO role SET ?";

    connection.query(query, promptAns, function (err) {
      if (err) throw err;
      console.log("Role Added Successfully")
      startApp();
    }
    );
  });
};

const employeeAdd = () => {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the first name of the employee you would like to create?"
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the last name of the employee you would like to create?"
    },
    {
      name: "title_id",
      type: "input",
      message: "What is the role of the employee you would like to create?"
      // validate isNaN
    },
    {
      name: "manager_id",
      type: "input",
      message: "What is the ID of the employee's manager? Leave empty if no manager."
    }
  ]).then(answer => {
    let promptAns = { first_name: answer.first_name, last_name: answer.last_name, title_id: answer.title_id, manager_id: answer.manager_id }
    let query = "INSERT INTO employee SET ?";

    connection.query(query, promptAns, function (err) {
      if (err) throw err;
      console.log("Employee Added Successfully")
      startApp();
    }
    );
  });
};

const departmentView = () => {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    // let arrayOfDep = () => {
    //   var choiceArray = [];
    //   for (var i = 0; i < results.length; i++) {
    //     choiceArray.push(results[i].name);
    //   }
    //   return console.log(choiceArray.toString());
    // }
    // arrayOfDep();
    console.table('Departments', results);
    // conTab(results)
    startApp();
  });
};

const roleView = () => {
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    // let arrayOfDep = () => {
    //   var tit = [];
    //   for (var i = 0; i < results.length; i++) {
    //     choiceArray.push(results[i].title);        
    //   }
    //   return console.log(choiceArray.toString());
    // }
    console.table('Roles', results);
    // arrayOfDep();
    startApp();
  });
};

const employeeView = () => {
  // "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"
  // "SELECT * AS employee, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"

  // "SELECT * FROM employee"
  // "SELECT * FROM employee RIGHT JOIN role ON employee.title_id = role.id "
  connection.query("SELECT * FROM employee FULL JOIN role ON employee.id = role.id ", function (err, results) {
    if (err) throw err;
    // let arrayOfDep = () => {
    //   var tit = [];
    //   for (var i = 0; i < results.length; i++) {
    //     choiceArray.push(results[i].title);        
    //   }
    //   return console.log(choiceArray.toString());
    // }
    console.table('Employees', results);
    // arrayOfDep();
    startApp();
  });
};

const employeeUpdate = () => {
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "What is the ID number of the employee you would like to update?"
    },
    {
      // prompt to display which employee to update
      //// choice array of employees
      //// whatever is the selection we need to retrieve the id that goes with that selection
      // how to display list of employees with id numbers?
      // join department and role
      // NPM install table
      name: "first_name",
      type: "input",
      message: "What is the employee's new first name?"
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the employee's new last name?"
    },
    {
      name: "title_id",
      type: "input",
      message: "What is the employee's new role?"
      // validate isNaN
    },
    {
      name: "manager_id",
      type: "input",
      message: "What is the ID of the employee's new manager? Leave empty if no manager."
    }
  ]).then(answer => {
    let promptAns = [answer.first_name, answer.last_name, answer.title_id, answer.manager_id, answer.id]
    // let promptId = { id: answer.id };
    // "UPDATE employee SET ? WHERE ?"
    let query = "UPDATE employee SET first_name = ?, last_name = ?, title_id = ?, manager_id = ? WHERE id = ?";

    connection.query(query, promptAns, function (err, res) {
      if (err) throw err;
      console.log("Employee Updated Successfully")
      console.log(res)
      startApp();
    }
    );
  });
};

