//const Employee = require("./lib/Employee.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");


// svg icons
// <i class="bi bi-cup"></i>
// <i class="bi bi-wrench"></i>
// <i class="bi bi-book"></i>


const promptEmployee = (roster) => {
    console.log("Add a new employee:")
    if (!roster) {
        roster = []
    }
    return inquirer
        .prompt([
            {
            type:"list",
            message: "What type of employee would you like to add?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
            },
            {
            type: "input",
            message: "Enter employee name",
            name: "name"
            },
            {
            type: "input",
            message: "Enter employee ID",
            name: "id"
            },
            {
            type: "input",
            message: "Enter employee email",
            name: "email"
            },
            {
            type: "input",
            message: "Enter engineer's github profile",
            name: "github",
            when: (answers) => answers.role === "Engineer"
            },
            {
            type: "input",
            message: "Enter managers's office number",
            name: "officeNumber",
            when: (answers) => answers.role === "Manager"
            },
            {
            type: "input",
            message: "Enter intern's school name",
            name: "school",
            when: (answers) => answers.role === "Intern"
            },
            {
            type: "confirm",
            message: "Add another employee?",
            name: "addEmployee",
            default: false
            }
    ])
    .then(employeeData => {
        roster.push(employeeData);
        if (employeeData.addEmployee) {
            return (promptEmployee(roster));
        }
        else {
            console.log(roster)
            return roster
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const main = () => {
    promptEmployee()
        .then(generatePage)
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
}

main();