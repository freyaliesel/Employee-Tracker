// dependencies
const {
    isValidString,
    isValidNumber,
} = require("../utils/utilfunctions.js");

class Department {
    constructor(name, id) {
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
        this.name = name;
        this.id = id;
    }
}

module.exports = Department;