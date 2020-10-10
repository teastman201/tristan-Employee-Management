const mysql = require("mysql");
const inquirer = require("inquirer");
// Below is randomly generated code. Purpose?
// const { start } = require("repl");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_Management"
});

connection.connect(function (err) {
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
        "Update employees"
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
      }
    });
}

const departmentAdd = () => {
  inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is the name of the department you would like to create?"
  }).then(answer => {
    let query = "INSERT INTO department SET name ?";
    connection.query(query, answer),
      err => {
        if (err) throw err;
        console.log("Department Add Error")
        startApp();
      }
  })
  startApp();
};

const roleAdd = () => {

  startApp();
};

const employeeAdd = () => {

  startApp();
};

const departmentView = () => {

  startApp();
};

const roleView = () => {

  startApp();
};

const employeeView = () => {

  startApp();
};

const employeeUpdate = () => {

  startApp();
};