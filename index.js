"use strict";

// dependencies
const inquirer = require("inquirer");
const viewQueries = require("../utils/viewQueries.js");
const editQueries = require("../utils/editQueries.js");
const {
    isValidString,
    isValidNumber,
    isValidSalary,
} = require("../utils/utilfunctions.js");

// prompt user for input - should be recursive
const mainMenu = [
    {
        type: "list",
        name: "menu",
        message: "Select an action: ",
        choices: ["View Organization", "Edit Organization", "Exit"],
    },
];

const viewOptions = [
    {
        type: "list",
        name: "menu",
        message: "Select an action: ",
        choices: [
            new inquirer.Separator(" = View All = "),
            "View all departments",
            "View all roles",
            "View all employees",
            new inquirer.Separator(" = View Filtered = "),
            "View employees by department",
            "View employees by role",
            "View employees by manager",
            "View total budget by department",
            new inquirer.Separator(" = Exit = "),
            "Return to main menu",
            "Exit application",
        ],
    },
];

const editOptions = [
    {
        type: "list",
        name: "menu",
        message: "Select an action: ",
        choices: [
            new inquirer.Separator(" = Add = "),
            "Add a department",
            "Add a role",
            "Add an employee",
            new inquirer.Separator(" = Update = "),
            "Update employee",
            "Update role",
            new inquirer.Separator(" = Remove = "),
            "Remove department",
            "Remove role",
            "Remove employee",
            new inquirer.Separator(" = Exit = "),
            "Return to main menu",
            "Exit application",
        ],
    },
];

// REQUIRED
// A view all departments prints a table to console with department names and ids
// B view all roles prints a table to console with job title, role id, department it belongs to, and salary
// C view all employees prints a table to console with employee id, first and last names, job title, department, salary, and manager they report to (if applicable)
// D add a department prompts user to enter name of department - creates new department in database
// E add a role prompts user to enter role name, salary, and department, creates new role in database
// F add an employee prompts user to enter first and last names, role, and manager, creates new employee in database
// G update employee role prompts user to select an employee to update, enter their new role

function init() {
    inquirer.prompt(mainMenu).then((res) => {
        if (res.menu === "Exit") {
            return;
        } else {
            orgOptions(res.menu);
        }
    });
}

function orgOptions(prompt) {
    let view = "View Organization";
    let questions = prompt && view ? viewOptions : editOptions;
    inquirer.prompt(questions).then((res) => {
        if (res.menu === "Exit application") {
            return;
        } else if (res.menu === "Return to main menu") {
            init();
        } else {
            questions === view ? viewQueries(res.menu) : editQueries(res);
        }
    });
}

// function viewOrg() {
//     inquirer.prompt(viewOptions).then((res) => {
//         if (res.menu === "Exit application") {
//             return;
//         } else if (res.menu === "Return to main menu") {
//             init();
//         } else {
//             viewQueries(res.menu);
//         }
//     });
// }

// function editOrg() {
//     inquirer.prompt(editOptions).then((res) => {
//         if (res.menu === "Exit application") {
//             return;
//         } else if (res.menu === "Return to main menu") {
//             init();
//         }
//     });
// }

init();
