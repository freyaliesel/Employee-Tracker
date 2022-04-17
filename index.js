"use strict";

// dependencies
const inquirer = require("inquirer");
const viewQueries = require("./utils/viewQueries.js");
const editQueries = require("./utils/editQueries.js");
const {
    mainMenu,
    viewOptions,
    editOptions,
} = require("./utils/inquirerQuestions.js");

// prompt user for input - should be recursive

// REQUIRED
// A view all departments prints a table to console with department names and ids
// B view all roles prints a table to console with job title, role id, department it belongs to, and salary
// C view all employees prints a table to console with employee id, first and last names, job title, department, salary, and manager they report to (if applicable)
// D add a department prompts user to enter name of department - creates new department in database
// E add a role prompts user to enter role name, salary, and department, creates new role in database
// F add an employee prompts user to enter first and last names, role, and manager, creates new employee in database
// G update employee role prompts user to select an employee to update, enter their new role

function main() {
    inquirer.prompt(mainMenu).then((res) => {
        if (res.menu === "Exit") {
            return;
        } else {
            orgOptions(res.menu);
        }
    });
}

function orgOptions(choice) {
    let view = "View Organization";
    let questions = choice === view ? viewOptions : editOptions;
    // console.log(questions);
    inquirer.prompt(questions).then((res) => {
        if (res.menu === "Exit application\n") {
            return;
        } else if (res.menu === "Return to main menu") {
            main();
        } else {
            if (questions === viewOptions) {
                viewQueries(res)
            } else {
                editQueries(res);
            }
            orgOptions(choice);
        }
    });
}

main();
