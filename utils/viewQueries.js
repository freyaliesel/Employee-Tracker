"use strict";
const { viewOptions } = require("./inquirerQuestions");

function viewQueries(res) {
    // switch case for calling which endpoint for viewing
    const {
        _,
        allDept,
        allRoles,
        allEmps,
        __,
        empByDept,
        empByRole,
        empByMngr,
        totalBudget,
    } = viewOptions.choices;

    switch (res.menu) {
        case allDept:
            break;
        case allRoles:
            break;
        case allEmps:
            break;
        case empByDept:
            break;
        case empByRole:
            break;
        case empByMngr:
            break;
        case totalBudget:
            break;
        default:
            return;
    }
}

module.exports = viewQueries;
