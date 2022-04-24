const { query } = require("./db");

function isValidString(value) {
    if (!value || typeof value !== "string" || !value.trim().length) {
        return false;
    } else {
        return true;
    }
}

function isValidNumber(value) {
    if (!value || value === true) {
        return false;
    }
    if (typeof value !== "number") {
        value = Number(value);
    }
    if (typeof value === "number" && Number.isInteger(value) && value > 0) {
        return true;
    } else {
        return false;
    }
}

function isValidSalary(value) {
    if (!value || Number(value) < 7.25) return false;
    if (Number(value) >= 10000 && value < 35568) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    isValidString,
    isValidNumber,
    isValidSalary
};
