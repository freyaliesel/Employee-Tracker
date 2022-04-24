"use strict";
const inquirer = require("inquirer");
const { isValidSalary, isValidNumber } = require("./utilfunctions");

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
            new inquirer.Separator("\n ~~~ View Filtered ~~~ "),
            "View employees by department",
            "View employees by role",
            "View employees by manager",
            "View total budget by department",
            new inquirer.Separator("\n ~~~ Exit ~~~ "),
            "Return to main menu",
            "Exit application\n",
        ],
    },
];

const editOptions = [
    {
        type: "list",
        name: "menu",
        message: "Select an action: ",
        choices: [
            new inquirer.Separator(" ~~~ Edit ~~~ "),
            "Add a department",
            "Add a role",
            "Add an employee",
            // new inquirer.Separator(`\n ~~~ Update ~~~ `),
            // "Update role",
            "Update employee",
            // new inquirer.Separator("\n ~~~ Remove ~~~ "),
            // "Remove department",
            // "Remove role",
            // "Remove employee",
            new inquirer.Separator("\n ~~~ Exit ~~~ "),
            "Return to main menu",
            "Exit application\n",
        ],
    },
];

const newDept = [
    {
        type: "input",
        name: "deptName",
        message: "Name of new Department",
        validate(value) {
            return isValidString(value) ? true : "Please enter a valid name";
        },
    },
];

const newRole = [
    {
        type: "input",
        name: "deptId",
        message: "Enter department ID for new role:",
        validate(value) {
            return isValidNumber(value) ? true : "Please enter a valid ID";
        },
    },
    {
        type: "input",
        name: "roleName",
        message: "Name of new Role:",
        validate(value) {
            return isValidString(value) ? true : "Please enter a valid name";
        },
    },
    {
        type: "input",
        name: "salary",
        message: "Salary for new role:",
        validate(value) {
            return isValidSalary(value) ? true : "Please enter a valid salary";
        },
    },
];

const newEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "Employee first name:",
        validate(value) {
            return isValidString(value) ? true : "Please enter a valid name";
        },
    },
    {
        type: "input",
        name: "lastName",
        message: "Employee last name:",
        validate(value) {
            return isValidString(value) ? true : "Please enter a valid name";
        },
    },
    {
        type: "input",
        name: "roleId",
        message: "Employee role:",
        validate(value) {
            return isValidNumber(value) ? true : "Please enter a valid ID";
        },
    },
    {
        type: "input",
        name: "managerId",
        message: "Manager ID:",
        validate(value) {
            return isValidNumber(value) ? true : "Please enter a valid ID";
        },
    },
];

const updateEmployee = [
    {
        type: "input",
        name: "empId",
        message: "Employee to update",
        default() {
            return "ID";
        },
        validate(value) {
            return isValidNumber(value) ? true : "Please enter a valid ID";
        },
    },
    {
        type: "input",
        name: "roleId",
        message: "New role for employee:",
        default() {
            return "ID";
        },
        validate(value) {
            return isValidNumber(value) ? true : "Please enter a valid ID";
        },
    },
];

// const deleteDept = [
//     {
//         type: "input",
//         name: "deptId",
//         message: "Enter department ID to remove",
//         validate(value) {
//             return isValidNumber(value) ? true : "Please enter a valid ID";
//         },
//     },
//     {
//         type: "confirm",
//         name: "confirm",
//         message: (answers) =>
//             `Are you sure you want to remove department ${answers.deptId}? WARNING: This action cannot be undone, and will impact any roles currently assigned to this department.`,
//     },
// ];

// const deleteRole = [
//     {
//         type: "input",
//         name: "roleId",
//         message: "Enter role ID to remove",
//         validate(value) {
//             return isValidNumber(value) ? true : "Please enter a valid ID";
//         },
//     },
//     {
//         type: "confirm",
//         name: "confirm",
//         message: (answers) =>
//             `Are you sure you want to remove role ${answers.roleId}? WARNING: This action cannot be undone, and will impact any employees currently assigned to this role.`,
//     },
// ];

// const deleteEmployee = [
//     {
//         type: "input",
//         name: "empId",
//         message: "Enter employee ID to remove",
//         validate(value) {
//             return isValidNumber(value) ? true : "Please enter a valid ID";
//         },
//     },
//     {
//         type: "confirm",
//         name: "confirm",
//         message: (answers) =>
//             `Are you sure you want to remove employee ${answers.empId}? WARNING: This action cannot be undone, and will impact any direct reports currently assigned to this employee.`,
//     },
// ];

module.exports = {
    mainMenu,
    viewOptions,
    editOptions,
    newDept,
    newRole,
    newEmployee,
    updateEmployee,
    // deleteDept,
    // deleteRole,
    // deleteEmployee,
};
