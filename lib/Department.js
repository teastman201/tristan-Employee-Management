// var connection = require("/config/connection.js");

class Department {
    constructor(name) {
        this.name = name;
    }
    departmentAdd = () => {
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

}
module.exports = Department;