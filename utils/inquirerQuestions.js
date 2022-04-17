"use strict";
const inquirer = require("inquirer");

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
            new inquirer.Separator(" ~~~ View All ~~~ "),
            "View all departments",
            "View all roles",
            "View all employees",
            new inquirer.Separator(" ~~~ View Filtered ~~~ "),
            "View employees by department",
            "View employees by role",
            "View employees by manager",
            "View total budget by department",
            new inquirer.Separator(" ~~~ Exit ~~~ "),
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
            new inquirer.Separator(" ~~~ Add ~~~ "),
            "Add a department",
            "Add a role",
            "Add an employee",
            new inquirer.Separator(`\n ~~~ Update ~~~ `),
            "Update employee",
            "Update role",
            new inquirer.Separator(" ~~~ Remove ~~~ "),
            "Remove department",
            "Remove role",
            "Remove employee",
            new inquirer.Separator(" ~~~ Exit ~~~ "),
            "Return to main menu",
            "Exit application",
        ],
    },
];

module.exports = {
    mainMenu,
    viewOptions,
    editOptions,
};
