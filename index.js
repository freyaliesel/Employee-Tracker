"use strict";

// dependencies
const inquirer = require("inquirer");
const queries = require("./utils/inquirerQuestions");
const orgDb = require("./utils/dbQueries");
const { json } = require("express/lib/response");
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
    inquirer.prompt(queries.mainMenu).then((res) => {
        if (res.menu === "Exit") {
            process.kill(process.pid, "SIGTERM");
        } else {
            let query = res.menu.includes("View")
                ? queries.viewOptions
                : queries.editOptions;
            subMenu(query);
        }
    });
}

function subMenu(query) {
    inquirer.prompt(query).then((res) => handleOptionsResponse(res.menu));
}

const handleViewQueries = async (choice) => {
    let results;
    switch (choice) {
        case "View all departments":
            [results] = await orgDb.getDepartments();
            break;
        case "View all roles":
            [results] = await orgDb.getRoles();
            break;
        case "View all employees":
            [results] = await orgDb.getEmployees();
            break;
        case "View employees by department":
            [results] = await orgDb.getEmployeesByDept()
            break;
        case "View employees by role":
            [results] = await orgDb.getEmployeesByRole();
            break;
        case "View employees by manager":
            [results] = await orgDb.getEmployeesByManager();
            break;
        case "View total budget by department":
            [results] = await orgDb.getBudget();
            break;
        default:
            return;
    }
    console.table(results);
    subMenu(queries.viewOptions);
};

// this needs to be made into an async function, like the view counterpart above
function handleEditQueries(res) {
    // switch case for determining which query to get for editing
    console.log("edit called");
    switch (res.menu) {
        case "Add a department":
            // inquirer prompts then
            addDepartment(deptName);
            break;
        case "Add a role":
            // inquirer prompts then
            addRole(title, salary, deptId);
            break;
        case "Add an employee":
            // inquirer prompts then
            addEmployee(firstName, lastName, roleId, managerId);
            break;
        case "Update role":
            // inquirer prompts then
            updateEntry(table, values);
            break;
        case "Update employee":
            // inquirer prompts then
            updateEntry(table, values);
            break;
        case "Remove department":
            // inquirer prompts then
            removeEntry(table, id);
            break;
        case "Remove role":
            // inquirer prompts then
            removeEntry(table, id);
            break;
        case "Remove employee":
            // inquirer prompts then
            removeEntry(table, id);
            break;
        default:
            console.log("\nEditing logic goes here\n");
            break;
    }
}

function handleOptionsResponse(choice) {
    if (choice.includes("Exit")) {
        process.kill(process.pid, "SIGTERM");
    } else if (choice.includes("Return")) {
        main();
    } else if (choice.includes("View")) {
        handleViewQueries(choice);
    } else {
        handleEditQueries(choice);
    }
}





main();
