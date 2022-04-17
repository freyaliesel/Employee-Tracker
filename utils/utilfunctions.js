const { get } = require("express/lib/response");
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
    if (!value || typeof value !== "number" || value < 7.25) return false;
    if (value >= 10000 && value < 35568) {
        return false;
    } else {
        return true;
    }
}

function handleDbResponse(err, results, fetchMethod) {
    let code;
    let message = [results];
    switch (fetchMethod) {
        case "get":
            code = 200;
            break;
        case "post":
            code = 201;
            break;
        case "delete":
            code = 202;
            break;
        default:
            break;
    }
    if (err) {
        console.error(err);
        code = 400;
        message = `Error in database query`;
        // res.status(400).json(message)
    } else {
        console.table(results);
    }
    // res.status(code).json(`${req.method} request received`)
    return [code, message];
}

module.exports = {
    isValidString,
    isValidNumber,
    isValidSalary,
    handleDbResponse,
};
