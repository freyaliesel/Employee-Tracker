// dependencies
const {
    isValidString,
    isValidNumber,
    isValidSalary
} = require("../utils/Functions.js");

class Role {
    constructor(name, id, salary) {
        if (!isValidString(name)) {
            throw new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
        }
        if (!isValidNumber(id)) {
            throw new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
        }
        if (!isValidSalary(salary)) {
            throw new Error(
                "Expected parameter 'salary' to be a non-negative number"
            );
        }
        this.name = name;
        this.id = id;
    }
    getDepartment() {
        // this probably needs an asynchronous check for dept names
    }
}

module.exports = Role;